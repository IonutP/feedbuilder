import React from 'react';
import FormInput from './components/form-input.component';
import RequiredElement from './components/required-box.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorText from './components/alert.component';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            siteName: '',
            exchange: '',
            symbol: '',
            cikNumber: '',
            year: '',
            yearValid: false,
            nrItems: 1,
            langId: 1,
            tagList: '',
            categoryId: '',
            prBody: false,
            prShortBody: false,
            bodyType: null,
            callback: '',
            assetType: '',
            prSelectDisabled: true,
            prCategories: [],
            dlSelectDisabled: true,
            dlCategories: [],
            departmentId: '',
            pplSelectDisabled: true,
            pplCategories: []
        }
    }

    getDepartments = () => {
        const { siteName } = this.state;
        if ( siteName.length ) {
            fetch('https://' + siteName + '.q4web.com/feed/People.svc/GetDepartmentList')
                .then(response => response.json())
                .then(data => (
                    this.setState({
                        pplSelectDisabled: false,
                        pplCategories: data.GetDepartmentListResult
                    })
                )).catch(function() {
                    alert('Domain name does not exist');
                });
        }
    }

    getDownloads = () => {
        const { siteName } = this.state;
        if ( siteName.length ) {
            fetch('https://' + siteName + '.q4web.com/feed/Lookup.svc/GetLookupList?lookupType=ReportType')
                .then(response => response.json())
                .then(data => (
                    this.setState({
                        dlSelectDisabled: false,
                        dlCategories: data.GetLookupListResult,
                        assetType: data.GetLookupListResult[0].Value
                    })
                )).catch(function() {
                    alert('Domain name does not exist');
                });
        }
    }

    getCategories = () => {
        const { siteName } = this.state;
        if ( siteName.length ) {
            fetch('https://' + siteName + '.q4web.com/feed/PressRelease.svc/GetPressReleaseCategoryList')
                .then(response => response.json())
                .then(data => (
                    this.setState({
                        prSelectDisabled: false,
                        prCategories: data.GetPressReleaseCategoryListResult
                    })
                )).catch(function() {
                    alert('Domain name does not exist');
                });
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value === '00000000-0000-0000-000000000000' ? '' : value
        });
    }

    handleCheckbox = (event) => {
        const { name, checked } = event.target;
        this.setState({
            [name]: checked,
        }, () => {
            this.setState({
                bodyType: this.state.prShortBody ? (this.state.prBody ? 1 : 3) : (this.state.prBody ? 2 : 0)
            })
        })
    }

    onInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    onYearChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value, yearValid: value.length < 4 && value !== '-1' ? false : true })
    }

    render() {
        return (
            <div className="App">
                <h1>Q4 Feed Builder</h1>
                <p>Documentation page here: <a href="http://documentation.q4websystems.com/home" target="_blank">http://documentation.q4websystems.com/home</a></p>
                <form>
                    <div className='form-group row'>
                        <div className='col-sm-6'>
                            <label htmlFor='siteName'><strong>Site Name</strong></label>
                            <div className='input-group input-group-sm'>
                                <FormInput autoComplete='off' name='siteName' type='text' handleChange={this.handleChange} required defaultValue={this.state.siteName} />
                                <div className='input-group-append'><span className='input-group-text'>.q4web.com</span></div>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='exchange'><strong>Exchange</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='text' name='exchange' onChange={this.handleChange} defaultValue={this.state.exchange} />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='symbol'><strong>Symbol</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='text' name='symbol' onChange={this.handleChange} defaultValue={this.state.symbol} />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='cikNumber'><strong>CIK#</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='text' name='cikNumber' onChange={this.handleChange} defaultValue={this.state.cikNumber} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'>
                            <label htmlFor='year'><strong>Year</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='number' name='year' onChange={this.onYearChange} defaultValue={this.state.year} />
                            <div className="info-text">Add "-1" to show all years.</div>
                            {this.state.year.length > 0 ? (this.state.yearValid ? null : <ErrorText>Must be a valid year.</ErrorText>) : null}
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='nrItems'><strong>Max # of Items</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='number' name='nrItems' onChange={this.handleChange} defaultValue='1' />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='langId'><strong>Language ID</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='text' name='langId' defaultValue='1' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-6'>
                            <label htmlFor='tagList'><strong>Tags</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='text' name='tagList' onChange={this.handleChange} />
                            <div className="info-text">Tags separated by comma. Ex: "tag1, tag2, tag3"</div>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-6'>
                            <label htmlFor='callback'><strong>JSONP callback</strong></label>
                            <input autoComplete='off' className='form-control form-control-sm' type='text' name='callback' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-6'>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-4'>
                            <h5>Press release only:</h5>
                            <label htmlFor='categoryId'><strong>PR Category</strong></label>
                            <div className="input-group">
                                <select name="categoryId" className="custom-select" defaultValue="All" disabled={this.state.prSelectDisabled ? true : false} onChange={this.handleChange}>
                                    <option value="00000000-0000-0000-000000000000">All</option>
                                    {
                                        this.state.prCategories.map((cat,i) => {
                                            return <option key={i} value={cat.WorkflowId}>{cat.CategoryName}</option>
                                        })
                                    }
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={this.getCategories}>Get Categories</button>
                                </div>
                            </div>
                            <div className='form-check'>
                                <input type="checkbox" className="form-check-input" name="prBody" id="prBody" onChange={this.handleCheckbox} />
                                <label className="form-check-label" htmlFor="prBody">Include PR body</label>
                            </div>
                            <div className='form-check'>
                                <input type="checkbox" className="form-check-input" name="prShortBody" id="prShortBody" onChange={this.handleCheckbox} />
                                <label className="form-check-label" htmlFor="prShortBody">Include PR short body</label>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <h5>Download list only:</h5>
                            <label htmlFor='assetType'><strong>Download Name</strong></label>
                            <div className="input-group">
                                <select name="assetType" className="custom-select" defaultValue="All" disabled={this.state.dlSelectDisabled ? true : false} onChange={this.handleChange}>
                                    {
                                        this.state.dlCategories.map((cat,i) => {
                                            return <option key={i} value={cat.Value}>{cat.Text}</option>
                                        })
                                    }
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={this.getDownloads}>Get Download Lists</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <h5>Person only:</h5>
                            <label htmlFor='departmentId'><strong>Department Name</strong></label>
                            <div className="input-group">
                                <select name="departmentId" className="custom-select" defaultValue="All" disabled={this.state.pplSelectDisabled ? true : false} onChange={this.handleChange}>
                                    <option value="00000000-0000-0000-000000000000">All</option>
                                    {
                                        this.state.pplCategories.map((cat,i) => {
                                            return <option key={i} value={cat.WorkflowId}>{cat.DepartmentName}</option>
                                        })
                                    }
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={this.getDepartments}>Get Departments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Press Release:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName ?
                                (
                                    <a
                                        href={`https://${this.state.siteName}.q4web.com/feed/PressRelease.svc/GetPressReleaseList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.bodyType ? '&bodyType=' + this.state.bodyType : ''}${this.state.categoryId ? '&categoryId='+this.state.categoryId : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true&pressReleaseDateFilter=1`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/PressRelease.svc/GetPressReleaseList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.bodyType ? '&bodyType=' + this.state.bodyType : ''}${this.state.categoryId ? '&categoryId='+this.state.categoryId : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true&pressReleaseDateFilter=1`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Event:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Event.svc/GetEventList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback='+this.state.callback : ''}&includeTags=true`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/Event.svc/GetEventList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Presentation:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Presentation.svc/GetPresentationList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback='+this.state.callback : ''}&includeTags=true`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/Presentation.svc/GetPresentationList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Stock Quote:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.exchange && this.state.symbol ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetFullStockQuoteList${this.state.exchange ? '?exchange=' + this.state.exchange : ''}${this.state.symbol ? '&symbol=' + this.state.symbol : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback='+this.state.callback : ''}`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetFullStockQuoteList${this.state.exchange ? '?exchange=' + this.state.exchange : ''}${this.state.symbol ? '&symbol=' + this.state.symbol : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback=' + this.state.callback : ''}`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.exchange ? null : <RequiredElement>Exchange</RequiredElement>}
                                        {this.state.symbol ? null : <RequiredElement>Symbol</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Stock Quote Historical:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.exchange && this.state.symbol ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList${this.state.exchange ? '?exchange=' + this.state.exchange : ''}${this.state.symbol ? '&symbol=' + this.state.symbol : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback='+this.state.callback : ''}`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList${this.state.exchange ? '?exchange=' + this.state.exchange : ''}${this.state.symbol ? '&symbol=' + this.state.symbol : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback=' + this.state.callback : ''}`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.exchange ? null : <RequiredElement>Exchange</RequiredElement>}
                                        {this.state.symbol ? null : <RequiredElement>Symbol</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Financial Report:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/FinancialReport.svc/GetFinancialReportList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback='+this.state.callback : ''}&includeTags=true`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/FinancialReport.svc/GetFinancialReportList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>SEC Filing:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.cikNumber && this.state.year ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/SECFiling.svc/GetEdgarFilingList${this.state.year && this.state.yearValid ? '?year=' + this.state.year : ''}${this.state.cikNumber ? '&exchange=CIK&symbol=' + this.state.cikNumber : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback='+this.state.callback : ''}`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/SECFiling.svc/GetEdgarFilingList${this.state.year && this.state.yearValid ? '?year=' + this.state.year : ''}${this.state.cikNumber ? '&exchange=CIK&symbol='+this.state.cikNumber : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback=' + this.state.callback : ''}`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.cikNumber ? null : <RequiredElement>CIK#</RequiredElement>}
                                        {this.state.year ? null : <RequiredElement>Year</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Download List:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.assetType.length ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/ContentAsset.svc/GetContentAssetList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.assetType ? '&assetType=' + this.state.assetType : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback='+this.state.callback : ''}&includeTags=true`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/ContentAsset.svc/GetContentAssetList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.assetType ? '&assetType=' + this.state.assetType : ''}${this.state.year && this.state.yearValid ? '&year=' + this.state.year : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.assetType ? null : <RequiredElement>Download List Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>HTML Content:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Html.svc/GetHtmlList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback='+this.state.callback : ''}&includeTags=true`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/Html.svc/GetHtmlList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Person:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/People.svc/GetPeopleList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.departmentId ? '&departmentId=' + this.state.departmentId : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback='+this.state.callback : ''}&includeTags=true`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/People.svc/GetPeopleList${this.state.langId ? '?languageId=' + this.state.langId : ''}${this.state.departmentId ? '&departmentId=' + this.state.departmentId : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : ''}${this.state.tagList ? '&tagList=' + this.state.tagList.replace(/ /g, '').replace(/,$/g, '').split(',').join('|') : ''}${this.state.callback ? '&callback=' + this.state.callback : ''}&includeTags=true`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
                <div className='row-wrapper card'><div className='card-body'><div className='row'>
                    <div className='col-sm-2'><strong>Dividend:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.exchange && this.state.symbol ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetDividendList${this.state.exchange ? '?exchange=' + this.state.exchange : ''}${this.state.symbol ? '&symbol=' + this.state.symbol : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback='+this.state.callback : ''}`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetDividendList${this.state.exchange ? '?exchange=' + this.state.exchange : ''}${this.state.symbol ? '&symbol=' + this.state.symbol : ''}${this.state.nrItems && this.state.nrItems !== '0' ? '&pageSize=' + this.state.nrItems : '' }${this.state.callback ? '&callback=' + this.state.callback : ''}`}
                                    </a>
                                )
                                :
                                (
                                    <p><span className='text'>Requires:</span>
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.exchange ? null : <RequiredElement>Exchange</RequiredElement>}
                                        {this.state.symbol ? null : <RequiredElement>Symbol</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div></div></div>
            </div>
        );
    }
}

export default App;
