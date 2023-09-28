import {FC} from 'react';
import './OptionOne.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BasicAccordion from './MaterialUI/Accordion';
import BasicSelect from './MaterialUI/Dropdown';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { ICandidate } from './fakeData';

interface IProps {
    Candidates: ICandidate[];
}

export const OptionOne: FC<IProps> = (Array) => {

return (
<div className='container opt1 mt-5'>
    <div className='row'>
        <div className='col-12 p-0 d-flex justify-content-between  '>
            <div className='col-1 pt-2 d-flex flex-column justify-content-between align-items-center sideMenu'>
                    <div className='col-12 UpSideMenu d-flex flex-column  align-items-center '>
                        <div className='col-12 mb-4 py-1 circle d-flex justify-content-center'>
                        <span></span>
                    </div>
                    <div className='col-7 mb-4 icon py-2 rounded d-flex justify-content-center '>
                        <HomeOutlinedIcon fontSize='medium' sx={{width:'100%', transition:'0.3s',color:'#1D4ED8'}}/>
                    </div>
                    <div className='col-7 py-2 mb-4 icon rounded d-flex justify-content-center '>
                        <PeopleAltOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                    </div>
                    <div className='col-7 mb-4 py-2 rounded icon d-flex justify-content-center '>
                        <AssignmentTurnedInOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                    </div>
                    <div className='col-7 mb-4 py-2 rounded icon d-flex justify-content-center '>
                        <ShareOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                    </div>
                    <div className='col-7 mb-4 py-2 rounded icon d-flex justify-content-center '>
                        <DescriptionOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                    </div>
                    <div className='col-7 mb-4 py-2 rounded icon d-flex justify-content-center '>
                        <ArticleOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                        </div>
                        <div className='col-7 mb-4 icon py-2 rounded d-flex justify-content-center '>
                        <FavoriteBorderOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                    </div>
                    <div className='col-7 mb-4 py-2 rounded icon d-flex justify-content-center '>
                        <ArrowBackIosNewOutlinedIcon fontSize='small' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                    </div>
                    </div>
                    <div className='col-12 DownSideMenu d-flex flex-column align-items-center'>
                        <div className='col-7 mb-4 icon py-2 rounded d-flex justify-content-center '>
                        <SettingsOutlinedIcon fontSize='medium' sx={{ width:'100%',transition:'0.3s',color:'#0B0B0B','&:hover':{color:'#1D4ED8'}}}/>
                        </div>
                        <div className='col-12 mb-4 py-1  userBottom d-flex justify-content-center'>
                        <span className='d-flex justify-content-center align-items-center'>AS</span>
                    </div>
                    </div>
            </div>
            <div className='col-11 d-flex theContainer justify-content-between p-4'>
                <div className='col-4'>
                        <h4 className='col-12'>London Internship Program</h4>
                        <span className='col-12'>London</span>
                        <div className='col-12 searchField d-flex '>
                            <input
                            className='col-12 mt-4 rounded py-3 px-5 '
                            type='text'
                            name='search'
                            placeholder='Serach by name, edu, exp or #tag'
                            />
                            <span><SearchOutlinedIcon fontSize='large' sx={{color:'#B0BABF'}} /></span>
                        </div>
                        <div style={{ backgroundColor: 'white' }} className='col-12 d-flex justify-content-between mt-5  p-3 '>
                            <h6 className='col-6 m-0'>Filtered</h6>
                            <span style={{ fontSize: '12px', color: '#0B0B0B' }} className='col-6 text-end'>0 Selected</span>
                        </div>
                        <div className='col-12 mt-1'>
                                <BasicAccordion/>
                            </div>
                </div>
                <div className='col-7 d-flex flex-column'>
                <div className='col-12 d-flex justify-content-between'>
                    <div className='dropDown col-5'>
                    <BasicSelect/>
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-between'>
                            <span style={{ backgroundColor: '#FFFFFF' }} className='col-1  d-flex align-items-center justify-content-center py-2 rounded'><LocalOfferOutlinedIcon sx={{ color: '#444444' }} fontSize='small' /></span>
                            <span style={{ backgroundColor: '#FFFFFF' }} className='col-1 d-flex align-items-center justify-content-center py-2 rounded'><PersonOffOutlinedIcon sx={{ color: '#A80000' }} fontSize='small' /></span>
                            <span style={{ backgroundColor: '#FFFFFF' }} className='col-1 d-flex align-items-center justify-content-center py-1 rounded'>
                            <i style={{ fontSize: '20px', color: '444444' }} className="bi bi-person-check"></i></span>
                            <span style={{ backgroundColor: '#FFFFFF' }} className='col-1 d-flex align-items-center justify-content-center py-2 rounded'><RecordVoiceOverOutlinedIcon sx={{ color: '#444444' }} fontSize='small' /></span>
                            <span style={{ backgroundColor: '#FFFFFF' }} className='col-1 d-flex align-items-center justify-content-center py-2 rounded'><MailOutlineOutlinedIcon sx={{ color: '#444444' }} fontSize='small' /></span>
                            <div className='col-6 d-flex rounded overflow-hidden'>
                            <span style={{ backgroundColor: '#1D5ECD', fontSize: '10px', fontFamily: 'Poppins, sans-serif', color: 'white', borderRight: '1px solid white' }} className='col-10 d-flex justify-content-center align-items-center p-2'>Move To Video Interview I</span>
                            <span style={{ backgroundColor: '#1D5ECD', fontSize: '10px', fontFamily: 'Poppins, sans-serif', color: 'white', }} className='col-2 d-flex align-items-center justify-content-center'><KeyboardArrowDownOutlinedIcon sx={{fontSize:'15px'}}/></span>
                                </div>

                            </div>
                        </div>
                 <div style={{ backgroundColor: 'white' }} className='rounded col-12 mt-4 d-flex flex-column'>
                <div className='col-12 d-flex justify-content-between checkBoxHead p-3'>
                <form className='checkBox col-4  d-flex justify-content-evenly'>
                    <input
                    type='checkbox'
                    className=' col-1 '
                    />
                <label className='fw-bold col-9 d-flex align-items-center justify-content-center' style={{color:'#1D4ED8'}}>{Array.Candidates.length } Candidates</label>
                </form>
                <div className='col-7 d-flex '>
                <span style={{ color: '#1D4ED8' }} className='col-4 d-flex align-items-center justify-content-center'>Qualified</span>
                <span className='col-4 d-flex taskSpan justify-content-center'>
                <span className='col-6'>Task</span>
                <span style={{fontSize:'10px',backgroundColor:'#F7F8FD'}} className='col-2 rounded d-flex justify-content-center align-items-center'>25</span>
                    </span>
                    <span style={{fontSize:'14px'}} className='col-4 d-flex align-items-center justify-content-center'>Disqualified</span>
                        </div>
                        </div>
                    <div className='col-12 checkBoxContainer  d-flex flex-column '>
                        {Array.Candidates.map((candidate: any) => {
                        return <div  key={candidate.id} className='col-12 checkBoxRow p-2 align-items-center d-flex'>
                            <input
                            id={`${candidate.id}`}
                            type='checkbox'
                            className='col-1'
                                />
                            <label style={{cursor:'pointer'}} htmlFor={`${candidate.id}`} className='col-10  d-flex'>
                            <div className='col-2 d-flex align-items-center justify-content-center'>
                            <span className='userNameCheckBox d-flex align-items-center justify-content-center'>AS</span>
                            </div>
                            <div className='col-8 d-flex flex-column'>
                            <span style={{ fontSize: '14px', fontWeight: '600' }} className='col-12 '>{candidate.name}</span>
                            <span className='col-12 my-1' style={{ fontSize: "10px" }}>{candidate.country}</span>
                                <span style={{ fontWeight: '100', fontSize: '10px' }} className='col-12 mb-1'>{candidate.education}</span>
                                    
                                {candidate.topCandidate && <div className='col-12 d-flex '>
                            <span style={{ fontSize: '8px', color: '#1D4ED8' }} className='col-3'>#Top_candidate</span>
                            <span style={{ fontSize: '8px', color: '#1D4ED8' }} className='col-3'>#Top_candidate</span>
                                    </div>}
                                    <div className='col-12 d-flex mt-1 align-items-center '>
                                        {candidate.tags.map((tag:string) => {
                                            return <span style={{color:'#037092',fontSize:'8px',backgroundColor:'#F3FAFC'}} className=' me-2 rounded col-2 text-center '>{ tag}</span>
                                        })}
                                    </div>
                                        </div>
                                            </label>

                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
