import React from "react";
import { ActivityIndicator, View } from "react-native";

interface IProps {
    load: boolean;
    empty: boolean;
}

export const FooterList: React.FunctionComponent<IProps> = ({
    load,
    empty,
}) => {
    if (empty) {
        // setLoad(false);
        return null;
    }

    if (load) return null;

    return (
        <View style={{ padding: 20 }}>
            <ActivityIndicator size={"large"} />
        </View>
    );
};
