import {createSlice, configureStore} from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isLoggedIn: false,
        userNonce: null,
        isUserSignedUp: true,
        jwt: null,
        expiresIn: null
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
        },
        logout(state, action) {
            state.isLoggedIn = false;
        },
        setNonce(state, action) {
            state.userNonce = action.payload;
        },
        setUserSignedUp(state, action) {
            state.isUserSignedUp = false;
        },
        setJWT(state, action) {
            state.jwt = action.payload.jwt;
            state.expiresIn = action.payload.expiresIn;

        },
        setLogout(state, action) {
            state.jwt = null;
            state.expiresIn = null;
        }
    }
});

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {isVisible: false, message: ''},
    reducers: {
        showSnackBar(state, action) {
            state.isVisible = true;
            state.message = action.payload;
        },
        hideSnackBar(state) {
            state.isVisible = false;
        }
    }
})

const createLaunchpadSlice = createSlice({
    name: 'createLaunchpad',
    initialState: {isValid: false, networkId: null, contractAddress: null},
    reducers: {
        setValid(state, action) {
            state.isValid = true;
            state.networkId = action.payload.networkId;
            state.contractAddress = action.payload.contractAddress;
        },
        setInvalid(state, action) {
            state.isValid = false;
            state.networkId = null;
            state.contractAddress = null;
        }
    }
});

const updateLaunchpadDetailsSlice = createSlice({
    name: 'updateLaunchpadDetails',
    initialState: {isUpdated: false, isMoreUpdated: false},
    reducers: {
        setUpdate(state, action) {
            state.isUpdated = true;
        },
        setMoreUpdate(state, action) {
            state.isMoreUpdated = true;
        }
    }
});

const getAllLaunchpadsSlice = createSlice({
    name: 'getAllLaunchpads',
    initialState: {launchpads: []},
    reducers: {
        setLaunchpads(state, action) {
            state.launchpads = action.payload;
        }
    }
});

const getSingleLaunchpadSlice = createSlice({
    name: 'getSingleLaunchpad',
    initialState: {singleLaunchpad: null},
    reducers: {
        setSingleLaunchpad(state, action) {
            state.singleLaunchpad = action.payload;
        }
    }
});

const buyLaunchpadSlice = createSlice({
    name: 'buyLaunchpad',
    initialState: {isBuyLaunchpad: false},
    reducers: {
        setBuyLaunchpad(state, action) {
            state.isBuyLaunchpad = true;
        }
    }
})

const ReduxStore = configureStore({
    reducer: {
        auth: authenticationSlice.reducer,
        notification: notificationSlice.reducer,
        createLaunchpad: createLaunchpadSlice.reducer,
        updateLaunchpadDetails: updateLaunchpadDetailsSlice.reducer,
        getAllLaunchpads: getAllLaunchpadsSlice.reducer,
        getSingleLaunchpad: getSingleLaunchpadSlice.reducer,
        buyLaunchpad: buyLaunchpadSlice.reducer
    }
});

export const authActions = authenticationSlice.actions;
export const notificationActions = notificationSlice.actions;
export const createLaunchpadActions = createLaunchpadSlice.actions
export const updateLaunchpadDetailedActions = updateLaunchpadDetailsSlice.actions;
export const getAllLaunchpadsActions = getAllLaunchpadsSlice.actions;
export const getSingleLaunchpadActions = getSingleLaunchpadSlice.actions;
export const buyLaunchpadActions = buyLaunchpadSlice.actions;

export default ReduxStore;