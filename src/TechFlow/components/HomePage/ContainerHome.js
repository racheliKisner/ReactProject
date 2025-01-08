import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ContainerHome()
{
    return(
        <>
            <header className="text-center my-4">
                <h1>Welcome to TechFlow</h1>
                <p>Your one-stop solution for tech news and resources.
                <br></br>
                <br></br>
                <br></br>
                We develop various types of new technologies
                </p>
            </header>
            <main className="flex-grow-1">
                <section className="features mb-4">
                    <h2>Features</h2>
                    <p>Explore our awesome features.</p>
                </section>
            </main>
        </>
    );
}
export default ContainerHome;