"use client";
import React from "react";
import {navLinks} from "@/app/constants";
import {FloatingNav} from "../components/ui/floating-navbar";

const Navbar = () => {

    return (
        <FloatingNav navItems={navLinks}/>
    )
}
export default Navbar
