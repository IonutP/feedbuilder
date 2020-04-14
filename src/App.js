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
            siteName: 'classic',
            apiKey: 'BF185719B0464B3CB809D23926182246',
            apiValid: true,
            exchange: '',
            symbol: '',
            cikNumber: '',
            year: '',
            nrItems: '',
            langId: 1,
            feedTags: '',
            prBody: false,
            prShortBody: false,
            bodyType: null,
            jsonCallback: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleCheckbox = (event) => {
        const { name, checked } = event.target;
        this.setState({
            [name]: checked,
            bodyType: this.state.prShortBody ? (this.state.prBody ? 1 : 3) : (this.state.prBody ? 2 : 0)
        })
    }

    onInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value, apiValid: value.length < 32 ? false : true })
    }

    render() {
        return (
            <div className="App">
                <h1>Q4 Feed Builder</h1>
                <form>
                    <div className='form-group row'>
                        <div className='col-sm-6'>
                            <label htmlFor='siteName'><strong>Site Name</strong></label>
                            <div className='input-group input-group-sm'>
                                <FormInput name='siteName' type='text' handleChange={this.handleChange} required defaultValue={this.state.siteName} />
                                <div className='input-group-append'><span className='input-group-text'>.q4web.com</span></div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <label htmlFor='apiKey'><strong>Q4 API Key</strong></label>
                            <FormInput name='apiKey' type='text' maxLength='32' handleChange={this.onInputChange} required defaultValue={this.state.apiKey} />
                            {
                                this.state.apiKey.length > 0 ?
                                    this.state.apiValid ? null : <ErrorText>API key must be 32 characters long.</ErrorText>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'>
                            <label htmlFor='exchange'><strong>Exchange</strong></label>
                            <input className='form-control form-control-sm' type='text' name='exchange' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='symbol'><strong>Symbol</strong></label>
                            <input className='form-control form-control-sm' type='text' name='symbol' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='cikNumber'><strong>CIK#</strong></label>
                            <input className='form-control form-control-sm' type='text' name='cikNumber' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='year'><strong>Year</strong></label>
                            <input className='form-control form-control-sm' type='number' name='year' onChange={this.handleChange} />
                            <ErrorText>Must be a valid year.</ErrorText>
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='nrItems'><strong>Max # of Items</strong></label>
                            <input className='form-control form-control-sm' type='text' name='nrItems' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-2'>
                            <label htmlFor='langId'><strong>Language ID</strong></label>
                            <input className='form-control form-control-sm' type='text' name='langId' defaultValue='1' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-6'>
                            <label htmlFor='feedTags'><strong>Tags</strong></label>
                            <input className='form-control form-control-sm' type='text' name='feedTags' onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-6'>
                            <label htmlFor='jsonCallback'><strong>JSONP callback</strong></label>
                            <input className='form-control form-control-sm' type='text' name='jsonCallback' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-12'>
                            <div className='form-check form-check-inline'>
                                <input
                                    type="checkbox"
                                    className="form-check-input position-static"
                                    name="prBody"
                                    id="prBody"
                                    onChange={this.handleCheckbox}
                                />
                                <label className="form-check-label" htmlFor="prBody">Include PR body</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="checkbox"
                                    className="form-check-input position-static"
                                    name="prShortBody"
                                    id="prShortBody"
                                    onChange={this.handleCheckbox}
                                />
                                <label className="form-check-label" htmlFor="prShortBody">Include PR short body</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col-sm-2'><strong>Press Release:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a
                                        href={`https://${this.state.siteName}.q4web.com/feed/PressRelease.svc/GetPressReleaseList${this.state.year ? 'test' : 'test2'}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {
                                            `https://${this.state.siteName}.q4web.com/feed/PressRelease.svc/GetPressReleaseList${this.state.langId ? '&languageId=' + this.state.langId : ''}${this.state.year ? '&year=' + this.state.year : ''}${this.state.feedTags ? '&tagList=' + this.state.feedTags.replace(/ /g,'').split(',').join('|') : ''}${this.state.bodyType ? '&bodyType='+ this.state.bodyType : '' }`
                                        }
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Event:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Event.svc/GetEventList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/Event.svc/GetEventList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Presentation:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Presentation.svc/GetPresentationList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/Presentation.svc/GetPresentationList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Stock Quote:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Stock Quote Historical:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Financial Report:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/FinancialReport.svc/GetFinancialReportList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/FinancialReport.svc/GetFinancialReportList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>SEC Filing:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/SECFiling.svc/GetEdgarFilingList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/SECFiling.svc/GetEdgarFilingList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Download List:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/ContentAsset.svc/GetContentAssetList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/ContentAsset.svc/GetContentAssetList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>HTML Content:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Html.svc/GetHtmlList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/Html.svc/GetHtmlList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Person:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/People.svc/GetPeopleList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/People.svc/GetPeopleList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'><strong>Dividend:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetDividendList`} target="_blank" rel="noopener noreferrer">
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetDividendList&apiKey=${this.state.apiKey}`}
                                    </a>
                                )
                                :
                                (
                                    <p>Requires:
                                        {this.state.siteName ? null : <RequiredElement>Site Name</RequiredElement>}
                                        {this.state.apiKey && this.state.apiValid ? null : <RequiredElement>API Key</RequiredElement>}
                                    </p>
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
