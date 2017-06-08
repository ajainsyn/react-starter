import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

const AccountList = ({...props}) => {
  const accounts = props.accounts.data;
  let accountList;

  accountList =  _.map(accounts, (account, i) => {
    return (
      <div className="card" key={i}>
        <div className="card-block">
          <h4 className="card-title">{account.first_name}</h4>
          <h5>{account.id}</h5>
          <a href="#" className="btn btn-primary">View Details</a>
        </div>
        <div className="card-footer">
          <small className="text-muted">{account.last_name}</small>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="card-columns">
        {accountList}
      </div>  
    </div>
    
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array,
};
export default AccountList;