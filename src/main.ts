import './assets/main.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";


import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Panel from 'primevue/panel';
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import TreeTable from 'primevue/treetable';
import Checkbox from 'primevue/checkbox';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Card from 'primevue/card';
import DeferredContent from 'primevue/deferredcontent';
import DialogService from 'primevue/dialogservice';
import DynamicDialog from 'primevue/dynamicdialog';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import Paginator from 'primevue/paginator';
import ProgressSpinner from 'primevue/progressspinner';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import TabMenu from 'primevue/tabmenu';
import Tooltip from 'primevue/tooltip';
import Breadcrumb from 'primevue/breadcrumb';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import Divider from 'primevue/divider';
import ToastService from 'primevue/toastservice';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Calendar from 'primevue/calendar';
import Steps from 'primevue/steps';
import RadioButton from 'primevue/radiobutton';
import AutoComplete from 'primevue/autocomplete';
import VirtualScroller from 'primevue/virtualscroller';
// import axios from "axios";

import Slider from 'primevue/slider';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);

const app = createApp(App).
component('MultiSelect', MultiSelect).  
component('Slider', Slider).
component('Checkbox',Checkbox).
component('InputText', InputText).
component('InputNumber', InputNumber).
component('DropDown', Dropdown).
component('Panel', Panel).
component('Button', Button).
component('Tree', Tree).
component('TreeSelect', TreeSelect).
component('TreeTable', TreeTable).
component('DataTable', DataTable).
component('Calendar', Calendar).
component('Column', Column). 
component('ColumnGroup', ColumnGroup).
component('Row', Row).
component('Card', Card).
component('VirtualScroller', VirtualScroller).
component('DeferredContent', DeferredContent).
component('DynamicDialog', DynamicDialog).
component('AutoComplete', AutoComplete).
component('Toolbar', Toolbar).
component('ProgressSpinner', ProgressSpinner).
// component('InputGroup', InputGroup).
// component('InputGroupAddon', InputGroupAddon).
component('Dialog', Dialog).
component('font-awesome-icon', FontAwesomeIcon).
component('font-awesome-svg', faUserSecret).
component('ConfirmPopup', ConfirmPopup).
component('ConfirmDialog', ConfirmDialog).
component('TabView', TabView).
component('TabPanel', TabPanel).
component('TabMenu',TabMenu).
component('Breadcrumb',Breadcrumb).
component('Divider',Divider).
component('Accordion',Accordion).
component('AccordionTab',AccordionTab).
component('Paginator', Paginator).
component('FileUpload', FileUpload).
component('Steps',Steps).
component('RadioButton',RadioButton)



app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
