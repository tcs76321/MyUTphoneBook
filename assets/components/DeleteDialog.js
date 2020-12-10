import React, {Component, useContext} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import PropTypes from "prop-types";
import {NamePhoneContext} from "../contexts/NamePhoneContext";

function DeleteDialog(props) {
    const context = useContext(NamePhoneContext);
    const hide = () => {props.setDeleteConfirmationIsShown(false);};

        return (
            <div>
                <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open}>
                    <DialogTitle>Are you sure you want to delete this contact?</DialogTitle>
                    <DialogContent>You are permanently deleting {props.namephone.name}</DialogContent>
                    <DialogActions>
                        <Button onClick={hide}>Cancel</Button>
                        <Button onClick={() => {context.deleteNamePhone({id: props.namephone.id, name: props.namephone.name}); hide();}}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    namephone: PropTypes.shape = ({
        id: PropTypes.number,
        name: PropTypes.string,
    })
};
export default DeleteDialog;