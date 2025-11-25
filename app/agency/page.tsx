"use client";
import React, { ReactNode, useState } from "react";
import ServicesCarousel from "@/components/services";
import './agency_globals.css';

function agency(){
    return(
        <>
            <br />
            <br />
            <br />
            <br />
            <h1 id="agencyheading">We <span className="glow"> build</span> what others can&apos;t <span className="glow">imagine.</span>
            </h1>
            <br />
            <p class="Subtexts">Solutions that work.</p>
            <br />
            <br />
            <ServicesCarousel/>
        </>
    )
}

export default agency;
