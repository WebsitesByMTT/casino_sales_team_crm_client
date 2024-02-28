"use client"

import SideBar from '@/app/components/sideBar/sideBar'
import React, { useEffect, useState } from 'react'
import './dashboardPage.css'
import NavBar from '@/app/components/navBar/navBar'
import { useDispatch, useSelector } from 'react-redux'
import { getPageComponentController } from '@/app/components/controllers'
import { addProjectForReports, addProjects, setEmployee } from '@/app/redux/reducers/projectReducer'
import { employeeData as sampleDate } from '@/employeeData'


const initialProjects = {
    form_website: {
        teams: ["Niitish", "Saurabh"],
        to_do_list: [
            {
                to_do_name: "added submitted button",
                status: "to_do"
            },
            {
                to_do_name: "implemet cors ploicy",
                status: "in_progress"
            },
            {
                to_do_name: "modigi ui",
                status: "done"
            },
            {
                to_do_name: "fix button overflow",
                status: "to_do"
            }
        ],

    }
};

const initialProjectsForReport = {
    form_website: {
        progressList: [
            {
                date: "01-01-2024",
                note: "today users reviedwe",
                user: 10
            },
            {
                date: "02-01-2024",
                note: "today actve user added by 7",
                user: 7
            },
            {
                date: "03-01-2024",
                note: "everyoi goodjdb",
                user: 20
            }
        ],

    }
};

const Dashboard = () => {

    const pageState = useSelector(state => state.projectStateSlice.pageState);
    const dispatch = useDispatch()
    const [pageBody, setPageBody] = useState(null)

    const checkTokenExist = async () => {

    }

    const getPageComponent = () => {
        setPageBody(getPageComponentController(pageState))
    }

    useEffect(() => {
        // dispatch(setEmployee(sampleDate))
        // dispatch(addProjects({ name: "form_website", data: initialProjects["form_website"] }))

        // dispatch(addProjectForReports({ name: "form_website", progressList: initialProjectsForReport["form_website"] }))
        // getPageComponent()
        checkTokenExist()

    }, [])

    useEffect(() => {
        getPageComponent()
    }, [pageState])


    return (
        <>
            <div className='dashboardContainer'>
                <div className='dashboardContainerTop'>
                    <NavBar />
                </div>
                <div className='dashboardContainerBottom'>
                    <div className='dashboardContainerBottomLeft'>
                        <SideBar />
                    </div>
                    <div className='dashboardContainerBottomRight'>
                        {pageBody}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard