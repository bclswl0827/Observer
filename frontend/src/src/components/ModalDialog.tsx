import {
    Button,
    Dialog,
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemButton,
} from "@mui/material";
import { Component } from "react";

export interface ModalDialogProps {
    readonly open: boolean;
    readonly title: string;
    readonly values: string[][];
    readonly onClose?: () => void;
    readonly onSelect?: (value: string) => void;
}

export default class ModalDialog extends Component<ModalDialogProps> {
    render() {
        const { title, open, values, onClose, onSelect } = this.props;
        return (
            <Dialog fullWidth open={open}>
                <AppBar className="bg-purple-500" sx={{ position: "relative" }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                            {title}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={onClose}>
                            X
                        </Button>
                    </Toolbar>
                </AppBar>

                <List>
                    {values.map((item, index) => (
                        <div key={index}>
                            <ListItem>
                                <ListItemButton
                                    onClick={() =>
                                        onSelect && onSelect(item[1])
                                    }
                                >
                                    <ListItemText
                                        primary={item[0]}
                                        secondary={item[2] ? item[2] : item[1]}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Dialog>
        );
    }
}