import {RootType} from '@/storage/reducers/rootReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;
