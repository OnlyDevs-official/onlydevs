"use client";
import React, { ReactNode, useState } from "react";
import ServicesCarousel from "@/components/services";
import './agency_globals.css';

function agency(){
    return(
        <>
            <h1 id="agencyheading">We <span className="glow">build</span>what others can't <span className="glow">imagine.</span>
            </h1>
            <ServicesCarousel/>
        </>
    )
}

export default agency;
