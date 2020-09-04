import React, { Attributes } from 'react';
import View from '@views/form/index'
import Head from 'next/head';

const Page: React.FC<Attributes> = (props): JSX.Element => {
    return (
        <>
            <Head>
                <title>Survey Form - Kpilens</title>
                {/* == immport the CSS required for the Grid to work only when this route is called == */}
                <link rel="stylesheet" type="text/css" href="/css/form.css" />
            </Head>
            {/* === Reference Component to Render ==== */}
            <View {...props} />
        </>
    );
};

export default Page;
