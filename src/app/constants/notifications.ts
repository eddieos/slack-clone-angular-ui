import { INotification } from '../interfaces/inotification';

const notifications: INotification[] = [
    {
        name: 'general',
        unread: 1,
        type: 'channel'
    },
    {
        name: 'random',
        type: 'channel'
    },
    {
        name: 'fun stuffs',
        type: 'channel'
    },
    {
        name: 'its just a long text to show ellipse',
        unread: 24598,
        type: 'channel'
    },


    // messages 
    {
        name: 'Theophilus Omoregbee',
        unread: 1,
        active: true,
        type: 'message'
    },
    {
        name: 'Collins',
        type: 'message'
    },
    {
        name: 'John Smith',
        type: 'message'
    }
]

export default notifications