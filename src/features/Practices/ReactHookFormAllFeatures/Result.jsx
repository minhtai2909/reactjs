import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContainer from './components/MainContainer';
import {
    makeStyles, Table, TableCell, TableContainer,
    TableHead, TableRow, Typography, TableBody, Paper, List, ListItem, ListItemIcon, ListItemText, Link
}
    from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import PrimaryButton from './components/PrimaryButton';
import Confetti from 'react-confetti';
import { useData } from './DataContext';
import Swal from 'sweetalert2';

Result.propTypes = {

};

const useStyle = makeStyles({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: "30px"
    }

})

function Result(props) {
    const [success, setSuccess] = useState(false);
    const styles = useStyle();
    const { data } = useData();
    const { files } = data;
    console.log("data-context", data);
    const entries = Object.entries(data).filter((entry) => entry[0] != "files");

    const onSubmit = async () => {
        const formData = new FormData();
        if (data.files) {
            data.files.forEach((file) => {
                formData.append("files", file, file.name);
            });
        }

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        })

        // const res = await fetch("http://localhost:4000/", {
        //     method: "POST",
        //     body: formData
        // });

        // if (res.status == 200) {
        //     Swal.fire("Great job!", "You've passed the challenge", "success");
        //     setSuccess(true);
        // }

        Swal.fire("Great job!", "You've passed the challenge", "success");
        setSuccess(true);
    };

    if (success) {
        return <Confetti />
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🧾 Form value 🍅
            </Typography>
            <TableContainer className={styles.root} component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            entries.map((entry) => (
                                <TableRow key={entry[0]}>
                                    <TableCell component="th" scope="row">{entry[0]}</TableCell>
                                    <TableCell align="right">{entry[1].toString()}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                files && (
                    <>
                        <Typography component="h2" variant="h5">
                            📁 Files
                        </Typography>
                        <List>
                            {
                                files.map((f, index) => {
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <InsertDriveFile />
                                        </ListItemIcon>
                                        <ListItemText primary={f.name} secondary={f.size} />
                                    </ListItem>
                                })
                            }
                        </List>
                    </>
                )
            }
            <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
            <Link to="/">Start over</Link>
        </MainContainer>
    );
}

export default Result;