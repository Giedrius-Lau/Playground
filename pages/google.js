import React from 'react';
import Head from 'next/head';

export const GoogleService = () => {
    var VIEW_ID = '58032574';

    function queryReports() {
        gapi.client
            .request({
                path: '/v4/reports:batchGet',
                root: 'https://analyticsreporting.googleapis.com/',
                method: 'POST',
                body: {
                    reportRequests: [
                        {
                            viewId: VIEW_ID,
                            dateRanges: [
                                {
                                    startDate: '7daysAgo',
                                    endDate: 'today',
                                },
                            ],
                            metrics: [
                                {
                                    expression: 'ga:sessions',
                                },
                            ],
                        },
                    ],
                },
            })
            .then(displayResults, console.error.bind(console));
    }
    function displayResults(response) {
        var formattedJson = JSON.stringify(response.result, null, 2);
        document.getElementById('query-output').value = formattedJson;
    }
    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <title>Hello Analytics Reporting API V4</title>
                <meta name='google-signin-client_id' content='495628851533-tvtneea5cuf6nnnk8nkmk2o33aqh9er8.apps.googleusercontent.com' />
                <meta name='google-signin-scope' content='https://www.googleapis.com/auth/analytics.readonly' />
                <script async src='https://www.google-analytics.com/analytics.js' />
            </Head>
            <div>
                <h1>Hello Analytics Reporting API V4</h1>
                <button onClick={() => queryReports()}>report</button>

                <p className='g-signin2 border-gray-600  border-2' data-onsuccess='queryReports'></p>

                <textarea cols='80' rows='20' className='border-gray-600 border-2' id='query-output'></textarea>
                <script async src='https://www.google-analytics.com/analytics.js' />
            </div>
        </div>
    );
};

export default GoogleService;
