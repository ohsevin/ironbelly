// @flow
//
// Copyright 2019 Ivan Sorokin.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { type Action } from 'common/types'

export type State = {
  text: string,
  styles: any,
}

const initialState: State = {
  text: '',
  styles: {},
}

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'TOAST_SHOW':
      return {
        ...state,
        ...action,
      }
    default:
      return state
  }
}
