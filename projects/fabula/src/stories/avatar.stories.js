import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeComponent,
    IconsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { AvatarExampleWrapper } from './wrappers/avatar/example/avatar-example.wrapper';
import { AvatarColorWrapper } from './wrappers/avatar/color/avatar-color.wrapper';
import { AvatarCustomIconWrapper } from './wrappers/avatar/custom-icon/avatar-custom-icon.wrapper';
import { AvatarExternalBadgeWrapper } from './wrappers/avatar/external-badge/avatar-external-badge.wrapper';
import { AvatarRoundedWrapper } from './wrappers/avatar/rounded/avatar-rounded.wrapper';
import { AvatarShowInitialsWrapper } from './wrappers/avatar/show-initials/avatar-show-initials.wrapper';
import { AvatarSizeWrapper } from './wrappers/avatar/size/avatar-size.wrapper';
import {  } from '../lib/modules/icons.module';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                TextComponent
            ],
            imports: [
                AvatarModule,
                BrowserModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Avatar'
}

export const Example = () => ({
    component: AvatarExampleWrapper,
});

export const Color = () => ({
    component: AvatarColorWrapper,
});

export const CustomIcon = () => ({
    component: AvatarCustomIconWrapper,
});

export const Rounded = () => ({
    component: AvatarRoundedWrapper,
});

export const ShowInitials = () => ({
    component: AvatarShowInitialsWrapper,
});

export const Size = () => ({
    component: AvatarSizeWrapper,
});

export const ExternalBadge = () => ({
    component: AvatarExternalBadgeWrapper,
});
