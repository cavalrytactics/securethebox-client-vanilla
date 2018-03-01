import _ from 'lodash';

class FuseUtils {

    static filterArrayByString(mainArr, searchText)
    {
        if ( searchText === '' )
        {
            return mainArr;
        }

        searchText = searchText.toLowerCase();

        return mainArr.filter(itemObj => {
            return this.searchInObj(itemObj, searchText);
        });
    };

    static searchInObj(itemObj, searchText)
    {
        for ( const prop in itemObj )
        {
            if ( !itemObj.hasOwnProperty(prop) )
            {
                continue;
            }

            const value = itemObj[prop];

            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }

            else if ( Array.isArray(value) )
            {
                if ( this.searchInArray(value, searchText) )
                {
                    return true;
                }
            }

            if ( typeof value === 'object' )
            {
                if ( this.searchInObj(value, searchText) )
                {
                    return true;
                }
            }
        }
    }

    static searchInArray(arr, searchText)
    {
        for ( const value of arr )
        {
            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }

            if ( typeof value === 'object' )
            {
                if ( this.searchInObj(value, searchText) )
                {
                    return true;
                }
            }
        }
    }

    static searchInString(value, searchText)
    {
        return value.toLowerCase().includes(searchText);
    }

    static generateGUID()
    {
        function S4()
        {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return S4() + S4();
    }

    static toggleInArray(item, array)
    {
        if ( array.indexOf(item) === -1 )
        {
            array.push(item);
        }
        else
        {
            array.splice(array.indexOf(item), 1);
        }
    }

    static handleize(text)
    {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/\W+/g, '')       // Remove all non-word chars
            .replace(/--+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    static setRoutes(config)
    {
        let routes = [...config.routes];

        if ( config.settings && !_.isEmpty(config.settings) )
        {
            routes = routes.map((route) => {
                if ( route.settings )
                {
                    return route;
                }
                return {
                    ...route,
                    settings: config.settings
                }
            })
        }

        return [...routes];
    }

    static generateRoutesFromConfigs(configs)
    {
        let allRoutes = [];
        configs.map((config) => {
            allRoutes = [
                ...allRoutes,
                ...this.setRoutes(config)
            ];
        });
        return allRoutes;
    }
}

export default FuseUtils;