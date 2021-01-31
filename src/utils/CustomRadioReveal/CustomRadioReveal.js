/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Icon from 'components/Icons';
import './CustomRadioReveal.scss';

/**
 * CustomRadioReveal
 * @param {*} param0
 */
const CustomRadioReveal = ({ account }) => {
    return (
        <div className="customRadioReveal">
            <input
                id={`account-type-${account.id}`}
                name="account-types"
                required
                type="radio"
            />
            <label htmlFor={`account-type-${account.id}`}>
                <span className="labelHeader">{account.label}</span>

                <div className="reveal-if-active">
                    <span className="text-bali-hai">{account.span}</span>

                    <div className="listBenefits py-2">
                        {account.benefits.map((benefit, _i) => {
                            return (
                                <div
                                    className="media mb-2"
                                    key={_i}
                                >
                                    <div className="mr-2">
                                        <Icon name="check-icon" />
                                    </div>

                                    <div className="media-body">
                                        <span className="font-size-13">{benefit.text}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </label>
        </div>
    );
};

export default CustomRadioReveal;
