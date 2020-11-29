import React from 'react'
import { Box, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DescriptionIcon from '@material-ui/icons/Description';
import TodayIcon from '@material-ui/icons/Today';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default function Widget({bg,title,desc, type}) {
    
    return (
        <div>
            <Box display="flex" height="100px" style={{background: '#27293D' , borderRadius: 10}}>
                <Box display="flex" justifyContent="center" alignItems="center" style={{background: `${bg}`}} height="80px" width="80px" mt={-5} ml={2}>
                    {
                        type === "ShoppingCartIcon" ? <ShoppingCartIcon fontSize="large" /> :
                            (type === "DescriptionIcon" ? <DescriptionIcon fontSize="large" /> :
                            (type === "TodayIcon" ? <TodayIcon fontSize="large" /> :
                            (type === "PeopleAltIcon" ? <PeopleAltIcon fontSize="large" /> : null)))
                    }
                </Box>
                <Box width="150px" display="flex" flexDirection="column" alignItems="flex-end" pr={1} pt={1}>
                    <Box><Typography variant="h6">{title}</Typography></Box>
                    <Box><Typography variant="h6">{desc}</Typography></Box>
                </Box>
            </Box>
        </div>
    )
}
