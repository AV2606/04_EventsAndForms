import React from 'react';
// import Contuct from './01_FormSubmit'
// import Parent from './02_LiftingUp';
// import FilteredProductList from './ProductsDemo/filteredProductList'
 import ProductsDemo from './03_CallbackLifting_ProductsDemo';
//import ToDoApp from './04_CrudTodoList';
//import ToDosApp from './05_CrudTodoFunc';
export default function AppForms() {
    return (
        <>
            {/* ---01 Forms Example---*/}
            {/* <Contuct /> */}

            {/*--- 02 Child-Parent Comunication using Callbacks on Props--- */}
            {/* <Parent></Parent> */}

            {/* ---03 Products Example using multiple components
             hirarchy with props callbacks--- */}
             <ProductsDemo></ProductsDemo>

            {/* <ToDoApp></ToDoApp> */}

            {/* <ToDosApp></ToDosApp> */}

        </>
    );
}