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
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css"/>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
