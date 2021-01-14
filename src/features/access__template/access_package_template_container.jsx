import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAccessTemplates} from "../../data/redux/dispatchers/access_template";
import LoadingProgress from "../../common/LoadingProgress";
import AccessTemplateList from "./access_template_list";
import {fetchEntities} from "../../data/redux/dispatchers/entity";
import AddAccessPackage from "./add/add_access_package_template";

const AccessPackageTemplateContainer = () => {
    const dispatch = useDispatch();
    const componentConfiguration = useSelector(state => state.component_configuration.componentConfiguration);
    const accessTemplates = useSelector(state => state.accessTemplate.access_templates);

    useEffect(() => {
            dispatch(fetchEntities());
            dispatch(fetchAccessTemplates());
        }, [dispatch]
    );


    function accessPackageLoaded(){
        return !componentConfiguration || componentConfiguration.length === 0 || !accessTemplates;
    }

    if (accessPackageLoaded()) {
        return <LoadingProgress/>;
    } else {
        return (
            <div>
                <AccessTemplateList/>
                <AddAccessPackage/>
            </div>
        );
    }
};

export default AccessPackageTemplateContainer;