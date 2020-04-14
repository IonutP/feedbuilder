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
            apiKey: '',
            apiValid: false
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
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
                        <div className='col-sm-2'><label htmlFor='siteName'><strong>Site Name</strong></label></div>
                        <div className='col-sm-10'>
                            <div className='input-group input-group-sm'>
                                <FormInput name='siteName' type='text' handleChange={this.handleChange} required />
                                <div className='input-group-append'><span className='input-group-text'>.q4web.com</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='apiKey'><strong>Q4 API Key</strong></label></div>
                        <div className='col-sm-10'>
                            <FormInput name='apiKey' type='text' maxLength='32' handleChange={this.onInputChange} required />
                            {
                                this.state.apiKey.length > 0 ?
                                    this.state.apiValid ? null : <ErrorText>API key must be 32 characters long.</ErrorText>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='exchange'><strong>Exchange</strong></label></div>
                        <div className='col-sm-10'><input className='form-control form-control-sm' type='text' name='exchange' /></div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='symbol'><strong>Symbol</strong></label></div>
                        <div className='col-sm-10'><input className='form-control form-control-sm' type='text' name='symbol' /></div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='cikNumber'><strong>CIK#</strong></label></div>
                        <div className='col-sm-10'><input className='form-control form-control-sm' type='text' name='cikNumber' /></div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='year'><strong>Year</strong></label></div>
                        <div className='col-sm-10'>
                            <input className='form-control form-control-sm' type='text' name='year' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='nrItems'><strong>Max # of Items</strong> <br/>(0 for unlimited)</label></div>
                        <div className='col-sm-10'>
                            <input className='form-control form-control-sm' type='text' name='nrItems' defaultValue='1' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='langId'><strong>Language ID</strong></label></div>
                        <div className='col-sm-10'>
                            <input className='form-control form-control-sm' type='text' name='langId' defaultValue='1' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='feedTags'><strong>Tags</strong></label></div>
                        <div className='col-sm-10'>
                            <input className='form-control form-control-sm' type='text' name='feedTags' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><strong>Show PR body?</strong></div>
                        <div className='col-sm-10'>
                            <div className='form-check'>
                                <input type="checkbox" className="form-check-input position-static" id="prBody" aria-label="include body" />
                            </div>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><strong>Show PR short body?</strong></div>
                        <div className='col-sm-10'>
                            <div className='form-check'>
                                <input type="checkbox" className="form-check-input position-static" id="prShortBody" aria-label="include short body" />
                            </div>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-2'><label htmlFor='jsonCallback'><strong>JSONP callback</strong></label></div>
                        <div className='col-sm-10'>
                            <input className='form-control form-control-sm' type='text' name='jsonCallback' />
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col-sm-2'><strong>Press Release:</strong></div>
                    <div className='col-sm-10'>
                        {
                            this.state.siteName && this.state.apiKey && this.state.apiValid ?
                                (
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/PressRelease.svc/GetPressReleaseList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/PressRelease.svc/GetPressReleaseList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Event.svc/GetEventList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/Event.svc/GetEventList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Presentation.svc/GetPresentationList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/Presentation.svc/GetPresentationList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetStockQuoteHistoricalList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/FinancialReport.svc/GetFinancialReportList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/FinancialReport.svc/GetFinancialReportList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/SECFiling.svc/GetEdgarFilingList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/SECFiling.svc/GetEdgarFilingList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/ContentAsset.svc/GetContentAssetList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/ContentAsset.svc/GetContentAssetList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/Html.svc/GetHtmlList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/Html.svc/GetHtmlList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/People.svc/GetPeopleList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/People.svc/GetPeopleList`}
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
                                    <a href={`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetDividendList`}>
                                        {`https://${this.state.siteName}.q4web.com/feed/StockQuote.svc/GetDividendList`}
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
