import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <h2 className='font-bold'>Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2> <br /><br />

            <p><span className='text-2xl font-bold'>Ans:</span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times</p>
            <br />
            <p>Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client and then retrieve it when needed.</p> <br /><br />

            <h2 className='font-bold'>Q2: Compare SQL and NoSQL databases?</h2> <br /><br />

            <p><span className='text-2xl font-bold'>Ans:</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores</p><br />
            <h2 className='font-bold'>Q2: What is express js and next js?</h2> <br /><br />

            <p><span className='text-2xl font-bold'>Ans:</span> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications</p><br /><br />

            <p><span className='text-2xl font-bold'>Ans:</span> Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js</p><br /><br />

            <h2 className='font-bold'>Q2: What is MongoDB aggregate and how does it work?</h2> <br /><br />

            <p><span className='text-2xl font-bold'>Ans:</span> What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages</p><br /><br />

       

        </div>
    );
};

export default BlogPage;