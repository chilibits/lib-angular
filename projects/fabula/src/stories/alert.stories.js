import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AlertModule,
    AvatarModule,
    ButtonModule,
    ButtonGroupComponent,
    IconsModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Demo wrappers
import { AlertExamplesWrapper } from './wrappers/alert/examples/alert-examples.wrapper';
import { AlertBorderWrapper } from './wrappers/alert/border/alert-border.wrapper';
import { AlertClearWrapper } from './wrappers/alert/clear/alert-clear.wrapper';
import { AlertCloseButtonWrapper } from './wrappers/alert/close-button/alert-close-button.wrapper';
import { AlertColorsWrapper } from './wrappers/alert/colors/alert-colors.wrapper';
import { AlertCustomContentWrapper } from './wrappers/alert/custom-content/alert-custom-content.wrapper';
import { AlertFadedWrapper } from './wrappers/alert/faded/alert-faded.wrapper';
import { AlertGlowWrapper } from './wrappers/alert/glow/alert-glow.wrapper';
import { AlertIconsWrapper } from './wrappers/alert/icons/alert-icons.wrapper';
import { AlertIconColorsWrapper } from './wrappers/alert/icon-colors/alert-icon-colors.wrapper';
import { AlertInvertWrapper } from './wrappers/alert/invert/alert-invert.wrapper';
import { AlertMarkerWrapper } from './wrappers/alert/marker/alert-marker.wrapper';
import { AlertOutlineWrapper } from './wrappers/alert/outline/alert-outline.wrapper';
import { AlertTextColorWrapper } from './wrappers/alert/text-color/alert-text-color.wrapper';
import { AlertTitleColorWrapper } from './wrappers/alert/title-color/alert-title-color.wrapper';
import { AlertTypeWrapper } from './wrappers/alert/type/alert-type.wrapper';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent
            ],
            imports: [
                AlertModule,
                AvatarModule,
                BrowserModule,
                ButtonModule,
                IconsModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Alert'
}

export const Examples = () => ({
    component: AlertExamplesWrapper,
});

export const Border = () => ({
    component: AlertBorderWrapper,
});

export const Clear = () => ({
    component: AlertClearWrapper,
});

export const CloseButton = () => ({
    component: AlertCloseButtonWrapper,
});

export const Color = () => ({
    component: AlertColorsWrapper,
});

export const CustomContent = () => ({
    component: AlertCustomContentWrapper,
});

export const Faded = () => ({
    component: AlertFadedWrapper,
});

export const Glow = () => ({
    component: AlertGlowWrapper,
});

export const Icons = () => ({
    component: AlertIconsWrapper,
});

export const IconColors = () => ({
    component: AlertIconColorsWrapper,
});

export const Invert = () => ({
    component: AlertInvertWrapper,
});

export const Marker = () => ({
    component: AlertMarkerWrapper,
});

export const Outline = () => ({
    component: AlertOutlineWrapper,
});

export const TextColor = () => ({
    component: AlertTextColorWrapper,
});

export const TitleColor = () => ({
    component: AlertTitleColorWrapper,
});

export const Type = () => ({
    component: AlertTypeWrapper,
});