import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>ChazChat - Customer Omnichannel Service</title>
                <meta name="description" content="ChazChat - React Customer Omnichannel Service" />
                <meta name="og:title" property="og:title" content="ChazChat - React Customer Omnichannel Service"></meta>
                <meta name="twitter:card" content="ChazChat - React Customer Omnichannel Service"></meta>
                <link rel="canonical" href="https://chazchat.netlify.app/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
