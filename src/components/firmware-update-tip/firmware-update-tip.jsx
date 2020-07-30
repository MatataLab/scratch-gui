import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './firmware-update-tip.css';
import domain from '../../config/domain.json';

const messages = defineMessages({
    firmwareUpdateModalTitle: {
        defaultMessage: 'Device firmware version check',
        description: '',
        id: 'gui.matata.firmwareUpdate'
    },
    firmwareUpdatePreLable: {
        defaultMessage: 'The version get from current hardware: ',
        description: '',
        id: 'gui.matata.firmwareUpdatePreLable'
    },
    firmwareUpdatePostLable: {
        defaultMessage: 'The firmware version does not match the version supported by the extension, needs to be upgraded',
        description: '',
        id: 'gui.matata.firmwareUpdatePostLable'
    },
    firmwareUpdateButtonText: {
        defaultMessage: 'Go to upgrade',
        description: '',
        id: 'gui.matata.firmwareUpdateButtonText'
    },
    sensorModeMismatch: {
        defaultMessage: 'The matatacon is not in sensor mode, please change the mode to sensor mode',
        description: '',
        id: 'gui.matata.sensorModeMismatch'
    },
    carNeedUpdateFirmware: {
        defaultMessage: 'A matatabot is connected to the matatacon and the matatabot firmware needs to be upgraded',
        description: '',
        id: 'gui.matata.carNeedUpdateFirmware'
    }
});

const getBodyContent = (intl, props) => {
    let content = `${intl.formatMessage(messages.firmwareUpdatePreLable) +
            props.deviceVersion} (${props.deviceType}) \n\n 
            ${intl.formatMessage(messages.firmwareUpdatePostLable)}`;

    if(props.deviceVersion === "notSensorMode") {
        return (
            <Box className={styles.updateTipContainer}>
                <div
                    className={styles.tipText}
                    style={{whiteSpace: 'pre-line'}}
                >
                    {intl.formatMessage(
                        messages.sensorModeMismatch
                    )}
                </div>
            </Box>);
    } else if (props.deviceVersion === "carNotSupport") {
        return (
            <Box className={styles.updateTipContainer}>
                <div
                    className={styles.tipText}
                    style={{whiteSpace: 'pre-line'}}
                >
                    {intl.formatMessage(
                        messages.carNeedUpdateFirmware
                    )}
                </div>
                <p className={styles.linkWrapper}>
                    <a
                        href={domain.mata_device_update_link}
                        className={styles.mainButton}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {intl.formatMessage(
                            messages.firmwareUpdateButtonText
                        )}
                    </a>
                </p>
            </Box>);
    } else {
        return (    
            <Box className={styles.updateTipContainer}>
                <div
                    className={styles.tipText}
                    style={{whiteSpace: 'pre-line'}}
                >
                    {content}
                </div>
                <p className={styles.linkWrapper}>
                    <a
                        href={domain.mata_device_update_link}
                        className={styles.mainButton}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {intl.formatMessage(
                            messages.firmwareUpdateButtonText
                        )}
                    </a>
                </p>
            </Box>);
    }
};

const FirmareUpdateTip = ({intl, ...props}) => {
    // 弹窗中的文字内容
    
    const bodyContent = getBodyContent(intl, props);
    
    return (
        <Modal
            id="matata.firmware.update.modal"
            className={styles.modalContent}
            contentLabel={intl.formatMessage(messages.firmwareUpdateModalTitle)}
            onRequestClose={props.onCancel}
        >
            <Box className={styles.body}>
                {bodyContent}
            </Box>
        </Modal>
    );
};

FirmareUpdateTip.propTypes = {
    intl: intlShape.isRequired,
    deviceVersion: PropTypes.string.isRequired,
    deviceType: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default injectIntl(FirmareUpdateTip);
