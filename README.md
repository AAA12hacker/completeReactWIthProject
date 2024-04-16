# completeReactWIthProject

# react uses babel behind the scene to execute every thing in our app

# 01createreact app

# 02vitereact app

## difference between createReactApp and createVite

# 1.createReactApp

1. here when we are creating the using create-react-app then it will take time as it will create
   by installing the packages, and also it will contain test library as jest, web vital used for performance of the webiste`
2. It will not follow strict rules you can write the component without jsx file
3. One more key difference is we will you the react-script in our create-react-app which will help the index.html to understand that you need to use the js file, here also script will added but with the other name with the help of react-script
4. it will not provide the error just stop running for nameCase,fileCase or like that

# 2.createVite

1. here when we are creating the app using npm create vite@latest it will take be execute fast then
   reason behind is it just create react app and does't install the packages, and it will just contain
   necessary library which will start the application like react,react-dom

2. It will follow strict rules you need to write the component in jsx file only

3. In this we will follow the old school way we will write the script and add in the index.html
   it will add it by it's own the correct script
4. it will provide the error and stop running for nameCase,fileCase or like that

## [plugin:vite:import-analysis] Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension. like this error it will give

# 3.custom react => we can make library of our own

# 4.Use State=> Why we have introduce useState, reason, and working

1. the problem when we are facing the updating of Ui by using the vanilla javascript was the UI was not getting update.
2. if we want to update the UI we will have a lot of work to do like
   1. we will call the element id in our function
   2. then we need to update with element.innerHTML
   3. if this thing need to be updated at multiple place we need to call every element and then use innerHTML then it will get update
3. use State helped us by just updating the one value and can use the value at every place
4. syntax: const [element, setElement]=useState()

# 13 Redux toolkit steps

## making of redux

## step1=>Store=>step2=>Reducers=>Step3=>useDispatch and useSelectort

## Store

1.  create the app file or with the other name and make a store.js file in it
2.  then in store.js sconfigureStore and export it like this
    1. import { configureStore } from "@reduxjs/toolkit";
    2. export const store = configureStore({});

## Reducers

3.  make a another file for reducer and createSlice in that with nanoId if you don't have ids
4.  then create a initialState how you'r data looks like.
5.  then use createSlice method and make a object in it like this also add reducers in it
6.  in reducers every function will have action and state,actions carrys the input and need to store in state

## dispatch

## useSelector
