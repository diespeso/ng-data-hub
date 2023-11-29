import type { Meta, StoryObj} from '@storybook/angular'

import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';

import { ForecastCardComponent} from './forecast-card.component'
import { CommonModule } from '@angular/common';

import { CardModule} from 'primeng/card'

const defaultProps = {
	minTemp: 16,
	maxTemp: 32
}


const meta: Meta<ForecastCardComponent> = {
  component: ForecastCardComponent,
	argTypes: {
		minTemp: {
			control: 'number'
		},
		maxTemp: {
			control: 'number'
		}
	}
}

export default meta;

type Story = StoryObj<ForecastCardComponent>


export const Primary: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule,CardModule ],
    }),
    componentWrapperDecorator((story) => `<div class="grid">
      <div class="col-4">
        ${story}
      </div>
    </div>`)
  ],
	args: {
		...defaultProps
	}
}

