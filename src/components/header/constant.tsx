import { ReactComponent as Planning } from '../../images/icon-planning.svg';
import { ReactComponent as Calendar } from '../../images/icon-calendar.svg';
import { ReactComponent as Todo } from '../../images/icon-todo.svg';
import { ReactComponent as Reminders } from '../../images/icon-reminders.svg';
import { ReactNode } from 'react';

export interface IFeature{
    text: string
    icon: ReactNode
}

export interface ICompany{
    text: string
}

export const FEATURES: Array<IFeature> = [
    { text: 'Planning', icon: <Planning /> },
    { text: 'Calendar', icon: <Calendar /> },
    { text: 'Todo List', icon: <Todo /> },
    { text: 'Reminders', icon: <Reminders /> },
]


export const COMPANY: Array<ICompany> = [
    { text: 'History' },
    { text: 'Our team' },
    { text: 'Blog' }
]
