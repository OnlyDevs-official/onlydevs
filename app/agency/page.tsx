"use client";
import React, { ReactNode, useState } from "react";
import ServicesCarousel from "@/components/services";
import styles from './agency.module.css';

function agency(){
    return(
        <>
            <h1 id="agencyheading">Our Agency</h1>
            <ServicesCarousel/>
        </>
    )
}

export default agency;
