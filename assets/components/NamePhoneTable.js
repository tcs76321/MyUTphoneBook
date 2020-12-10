import React, {useContext, useState} from 'react';
// import {useContext} from "react/cjs/react.production.min";
import {NamePhoneContext} from "../contexts/NamePhoneContext";
import {
    IconButton,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
// import {useContext} from "react/cjs/react.production.min";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteDialog from "./DeleteDialog";


function NamePhoneTable() {
    const context = useContext(NamePhoneContext);
    const [addNamePhone, setAddNamePhone] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editNamePhone, setEditNamePhone] = useState('');
    const [DeleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [namephoneToBeDeleted, setnamephoneToBeDeleted] = useState(null);


    return (
        <React.Fragment>
            <form onSubmit={(event) => {
                context.createNamePhone(event, {name: addNamePhone})
            }}>
                {/*<h1><IconButton><ContactPhoneIcon/></IconButton>My UT Phone Book</h1>*/}

                <h4 align="center"><br/><br/><u>Add New Contact</u></h4>
                <Table>
                    {/*<TableHead>*/}
                    {/*    <TableRow>*/}
                    {/*        <TableCell>Name</TableCell>*/}
                    {/*        <TableCell>Phone Number</TableCell>*/}
                    {/*        <TableCell>Favorited</TableCell>*/}
                    {/*        <TableCell>Color Code</TableCell>*/}
                    {/*        <TableCell align="right"></TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*</TableHead>*/}
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField value={addNamePhone} onChange={(event) => {setAddNamePhone(event.target.value)}} label="Name"></TextField>
                            </TableCell>
                            <TableCell><TextField label="Phone Number"></TextField></TableCell>
                            <TableCell><IconButton><StarIcon/></IconButton></TableCell>
                            <TableCell><TextField label="Color Code"></TextField></TableCell>
                            <TableCell align="right"><IconButton type="submit"><PersonAddIcon/></IconButton></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


                <h4 align="center"><br/><br/><br/><br/><u>Contact List</u></h4>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Favorited</TableCell>
                            <TableCell>Color Code</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {context.namephones.slice().reverse().map((namephone, index) =>(
                            <TableRow key={'namephone ' + index}>
                                <TableCell>
                                    <IconButton><PersonIcon/></IconButton>

                                    {editIsShown === namephone.id ?
                                        <TextField
                                            value={editNamePhone}
                                            onChange={(event) => {
                                                setEditNamePhone(event.target.value);
                                            }}
                                            InputProps={{
                                                endAdornment: <React.Fragment>
                                                    <IconButton onClick={() => {setEditIsShown(false)}}><CancelIcon/></IconButton>
                                                    <IconButton onClick={() => {context.updateNamePhone({id: namephone.id, name: editNamePhone}); setEditIsShown(false);}}><CheckCircleOutlineIcon/></IconButton>
                                                </React.Fragment>,
                                            }}
                                        /> : namephone.name
                                    }

                                </TableCell>
                                <TableCell>numbers</TableCell>
                                <TableCell><IconButton>
                                    <StarIcon/>
                                </IconButton></TableCell>
                                <TableCell>colorss</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => {setEditIsShown(namephone.id); setEditNamePhone(namephone.name)}}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => {setDeleteConfirmationIsShown(true); setnamephoneToBeDeleted(namephone)}}>
                                        <DeleteForeverIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>

            {DeleteConfirmationIsShown && (
            <DeleteDialog
                namephone={namephoneToBeDeleted}
                open={DeleteConfirmationIsShown}
                setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}
            />
            )}

        </React.Fragment>
    );
}



export default NamePhoneTable;