import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'
import App from './App'

import Index from './demos/Index'
import Tpl from './demos/_Tpl'
import ActionSheet from './demos/ActionSheet'
import Datetime from './demos/Datetime'
import Dialog from './demos/Dialog'
import Flexbox from './demos/Flexbox'
import Layout from './demos/Layout'
import MButton from './demos/MButton'
import MHeader from './demos/MHeader'
import MInput from './demos/MInput'
import MTextarea from './demos/MTextarea'
import Picker from './demos/Picker'
import Popside from './demos/Popside'
import Popup from './demos/Popup'
import Radio from './demos/Radio'
import RadioCircle from './demos/RadioCircle'
import Selector from './demos/Selector'
import Switch from './demos/Switch'
import Tag from './demos/Tag'
import Toast from './demos/Toast'

FastClick.attach(document.body)

Vue.use(Router)

const router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/': {
    component: Index
  },
  '/components/_tpl': {
    component: Tpl
  },
  '/components/action-sheet': {
    component: ActionSheet
  },
  '/components/datetime': {
    component: Datetime
  },
  '/components/dialog': {
    component: Dialog
  },
  '/components/flexbox': {
    component: Flexbox
  },
  '/components/layout': {
    component: Layout
  },
  '/components/m-button': {
    component: MButton
  },
  '/components/m-header': {
    component: MHeader
  },
  '/components/m-input': {
    component: MInput
  },
  '/components/m-textarea': {
    component: MTextarea
  },
  '/components/picker': {
    component: Picker
  },
  '/components/popside': {
    component: Popside
  },
  '/components/popup': {
    component: Popup
  },
  '/components/radio': {
    component: Radio
  },
  '/components/radio-circle': {
    component: RadioCircle
  },
  '/components/selector': {
    component: Selector
  },
  '/components/switch': {
    component: Switch
  },
  '/components/tag': {
    component: Tag
  },
  '/components/toast': {
    component: Toast
  }
})

router.start(App, '#app')
