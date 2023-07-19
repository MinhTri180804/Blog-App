import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from '../components/header';
import PostListComponent from '../components/postList';
import FooterComponent from '../components/footer';

HomeRoutes.propTypes = {
    
};

function HomeRoutes(props) {
    return (
        <>
            <h2 className='text-[26px] text-center uppercase mt-[20px] font-bold'>trang chu</h2>
            <PostListComponent title="Blog" />
            <PostListComponent title="Tin tuc" />
            <PostListComponent title="Videos" />
        </>
    );
}

export default HomeRoutes;