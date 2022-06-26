import './SimpTab.css';
import React from 'react';


function SimpleTable(){
    return(
        <div>
            <h2> Table Using Html and CSS! </h2>
            <div class="mainOuter">

                <div class="headerContainer">
                    <div class="headerRow">
                        <div class="headerTab">
                            <h6 id="btn"> <a href="#" > Go to Home</a></h6>
                            <h6> Team</h6>
                            <h6> Year</h6>
                            <h6> Month</h6>
                            <h6> Shift</h6>
                            <h6> Shift Timing</h6>
                        </div>
                    </div>
                </div>
{/* Buttons and specifications */}
                <div class="container">
                    <div class="row">
                        <div class="ViewSetting">
                            <div class="vs">
                                <h6> <a href="#"  class="click-btn">view Request</a></h6>
                                <h6> <a href="#" class="click-btn">Team Permission Setting</a></h6>
                            </div>
                            <div class="specification">
                                <h6> Year</h6>
                                <h6> Month</h6>
                                <h6> Shift</h6>
                                <h6> Shift Timing</h6>
                            </div>
                        </div>
                    </div>
                </div>
{/* Emplyoee And Dates */}
            <div class="headerContainer">
            <table class="simptable">

            <tr class="simptr">
                <th rowspan="2" class="headingEmp">Emplyoee</th>
                    <td>Sept 06</td>
                    <td>Sept 07</td>
                    <td>Sept 08</td>
                    <td>Sept 09</td>
                    <td>Sep 10</td>
                    <td>Sep11</td>
                    <td>Sep12</td>
            </tr>
            <tr class="text-light text-center back-light simptr">
                    <td>Mon</td>
                    <td>Tu</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td>
                    <td>Sun</td>
            </tr>

            </table>
            </div>
{/* Table Info */}
            <table>
                {/* <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead> */}
                {/* <tbody> */}
                
                        <tr  class="simptr">
                            <th>Pooja B 
                            <p class="post"> sr.Execative</p></th>
                            <td>$</td>
                            <td>$</td>
                            <td>$</td>
                            <td>$</td>
                            <td>$</td>
                            <td>$</td>
                            <td>*</td>
                            <td>*</td> 
                            <td>*</td>
                            <td>*</td>
                            <td>*</td>
                            <td>*</td>
                        </tr>
                        
                        <tr  class="simptr">
                              <th>Joah Warner
                              <p class="post"> Product Manager</p></th>
                                <td>*</td>
                                <td>*</td> 
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                        </tr>
                        <tr  class="simptr">
                              <th>Satish Kumar
                              <p class="post"> Jr.Executive</p></th>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                
                        </tr>
                        <tr  class="simptr">
                              <th>Kiran Sharma
                              <p class="post"> Jr.Executive</p></th>
                                <td>*</td>
                                <td>*</td> 
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                        </tr>
                        <tr  class="simptr">
                              <th>Aaliya K
                              <p class="post"> Sr.Executive</p></th>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                                <td>*</td>
                        </tr>
                        {/* </tbody> */}
                </table>
            </div>
        </div>
    )
}
export default SimpleTable;