import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";





function projects() {
    const redirectToWeatherApp = () => {
        window.location.href = 'https://github.com/Calimero66/WeatherApp';
    };
    const redirectToPortfolio = () => {
        window.location.href = 'https://github.com/Calimero66/Portfolio';
    };
    

    return (
        <>
            <div className='flex flex-col items-center justify-center max-w-[955px]  mx-auto my-auto'>
                    <h3 className='text-3xl lg:text-5xl'>&lt; projects /&gt;</h3>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-center max-w-[955px] lg:w-3/6 py-14 mx-auto my-auto'>
                
                <div className='p-4 m-4'>

                    <Card className="mt-6 w-96 bg-[#A9A9BC] ">
                        <CardBody>
                            
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Portfolio
                            </Typography>

                            <Typography>
                                A dynamic React &quot;Portfolio&quot;  showcasing my projects and skills with interactive design and seamless navigation.
                            </Typography>
                        </CardBody>

                        <CardFooter className="pt-0">
                            <Button onClick={redirectToPortfolio}><FaGithub className='' /> </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className='p-4 m-4'>
                    <Card className="mt-6 w-96 bg-[#A9A9BC] ">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                WeatherApp 
                            </Typography>
                            <Typography>
                            Check the weather in your city instantly with our simple &quot;WeatherApp!&quot; Just type your city and get instant weather updates hassle-free.    
                            
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button onClick={redirectToWeatherApp}> <FaGithub className='' /> </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className='p-4 m-4'>
                    <Card className="mt-6 w-96 bg-[#A9A9BC] cursor-not-allowed ">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Coming soon
                            </Typography>
                            <Typography>
                                I will update that as soon as possible to showcase more projects. I have encountered a few problems that need fixing.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button disabled><FaGithub className='' /></Button>
                        </CardFooter>
                    </Card>
                </div>
                

            </div>
        </>
    )
}

export default projects;