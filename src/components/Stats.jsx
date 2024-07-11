import React from 'react';
import { connect } from 'react-redux';
import { decrementFollowers, incrementFollowers, decrementFollowing, incrementFollowing } from '/src/actions/statsAction.js';

const Stats = ({ followers, following, decrementFollowers, incrementFollowers, decrementFollowing, incrementFollowing }) => {

    const handleDecrementFollowers = (e) => {
        e.preventDefault();
        decrementFollowers();
    }

    const handleIncrementFollowers = (e) => {
        e.preventDefault();
        incrementFollowers();
    }

    const handleDecrementFollowing = (e) => {
        e.preventDefault();
        decrementFollowing();
    }

    const handleIncrementFollowing = (e) => {
        e.preventDefault();
        incrementFollowing();
    }

    return (
        <div>
            <p>
                followers: {followers}
                <button onClick={handleDecrementFollowers}>-</button>
                <button onClick={handleIncrementFollowers}>+</button>
            </p>
            <p>
                following: {following}
                <button onClick={handleDecrementFollowing}>-</button>
                <button onClick={handleIncrementFollowing}>+</button>
            </p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    followers: state.stats.followers,
    following: state.stats.following
});

const mapDispatchToProps = {
    decrementFollowers,
    incrementFollowers,
    decrementFollowing,
    incrementFollowing
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
