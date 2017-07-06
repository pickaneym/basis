export const flexClasses = `
/*
|--------------------------------------------------------------------------
| Flex classes
|--------------------------------------------------------------------------
*/

.flex{
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -ms-flex-flow: row wrap;
   flex-flow: row wrap;
}

.flex.-column{
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
}

.flex.-no-wrap{
   -ms-flex-wrap: nowrap;
   flex-wrap: nowrap;
}

.flex.-items-center{
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   -ms-grid-row-align: center;
   align-items: center;
}

.flex.-jc-center{
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
}

.flex.-ai-center{
   -webkit-box-align: center;
   -ms-flex-align: center;
   -ms-grid-row-align: center;
   align-items: center
}

`;
