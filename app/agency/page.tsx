"use client";
import React, { ReactNode, useState } from "react";
import ServicesCarousel from "@/components/services";
import './agency_globals.css';

function agency(){
    return(
        <>
            <h1 id="agencyheading">Our Agency</h1>
            <ServicesCarousel/>
        </>
    )
}

export default agency;
