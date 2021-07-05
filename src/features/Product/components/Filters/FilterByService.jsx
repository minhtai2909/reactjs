import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },

    list: {
        padding: 0,
        margin: 0,

        '& > li': {
            margin: 0,
            marginTop: theme.spacing(1),
            listStyleType: 'none'
        }
    }
}));

function FilterByService({ Filter = {}, OnChange = () => { } }) {
    const classes = useStyles();
    const handleChange = (e) => {
        const { name, checked } = e.target;
        OnChange({ [name]: checked });
    }    
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" >DỊCH VỤ</Typography>

            <ul className={classes.list}>
                {[
                    { value: 'isPromotion', label: "Có khuyến mãi" },
                    { value: 'isFreeShip', label: "Vận chuyển miễn phí" }
                ].map(service =>
                    <li key={service.value}>
                        {Filter[service.value]}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!Filter[service.value]}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />

                    </li>
                )}
            </ul>
        </Box>
    );
}
export default FilterByService;