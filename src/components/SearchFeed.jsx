import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchfromAPI } from '../utilities/fetchfromAPI';
import { Videos } from "./";

const SearchFeed = () => {

    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchfromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])


    return (
        <Box p={2} minHeight="95vh" >
            <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
                Search results for <span style={{ color: "#FC1503" }}> {searchTerm}</span> Videos
            </Typography>

            <Box display="flex" justifyContent="center" >
                <Box sx={{ mr: { sm: '100px' } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>
    )
};

export default SearchFeed
