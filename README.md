# world champions

###  `screenshots`
![champions](https://user-images.githubusercontent.com/88872799/146949596-25b079b7-9e09-4091-9118-436f0d9b04b3.png)![winners](https://user-images.githubusercontent.com/88872799/146949850-737f966a-3c7c-4c08-ae67-ff23641ff70f.png)
To run this project. please run the following commands

### `npm install` 
Install required dependencies.
### `npm start` 
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the tests

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

### `summary about project`

#### `statement`
Target was to create a single page application (SPA) that presents a list that shows the F1 world champions starting from 2005 until now. Clicking on an item shows the list of the winners for every race for the selected year. We also request to highlight the row when the winner has been the world champion in the same season

#### `tech stack`
I used following stack to create SPA
- react (hooks)       -- for components (UI) 
- typescript          -- for type checking 
- redux               -- for state management
- axios               -- for Api calling 
- react-router-dom    -- for routing 
- react-toastify      -- for toast notification 
- react-testing-library     -- for unit and integration test 

#### `other tools`
- prettier  -- for code formating
- tslint    -- for code standards


#### `description`
Created different reusable components for SPA such as champions, winners, table, list.containers etc. I maintained app's structure in the below form
- components -- contained main components like champions, winners etc. 
- config     -- contained configuration like end point, store etc. 
- shared     -- contained shareable items like components, hooks, actions etc. for example created table component and used for champions and winners list 
- routes     -- routing created under this directory 
- utils      -- constants, messages, helper etc. created under this directory 

used <http://ergast.com/mrd/> for data


#### `note`
I added README file under different folder for more detail
