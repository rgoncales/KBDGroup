import React from 'react'
import '../themes-dist-5.1-gcweb/css/theme.css';

const Dropdown = () => {
  return (
    <ul role="menu" aria-orientation="vertical" data-ajax-replace="./ajax/sitemenu-v5-en.html" class="wb-init wb-data-ajax-replace-inited" id="wb-auto-3">
      <li role="presentation">
        <a role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="true" href="#">Jobs and the workplace</a>
        <ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical">
        <li role="presentation">
        <a role="menuitem" tabindex="0" href="https://www.canada.ca/en/services/jobs.html">Jobs<span class="visible-xs-inline visible-sm-inline">: home</span></a>
        </li>
        <li role="separator"></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/opportunities.html">Find a job</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/training.html">Training</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/business-management">Hire and manage employees</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/start-business">Starting a business</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/workplace.html">Workplace standards</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/pensions.html">Pensions and retirement</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei.html">Employment Insurance and leave</a></li>
        <li role="separator" aria-orientation="horizontal"></li>
        <li role="presentation">
        <a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs-sub" aria-expanded="false">Most requested</a>
        <ul id="gc-mnu-jobs-sub" role="menu" aria-orientation="vertical">
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html">View your Records of Employment</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/services/sin.html">Apply for a Social Insurance Number (SIN)</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html">Hire a temporary foreign worker</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html">Immigrate as a skilled worker</a></li>
        </ul>
        </li>
        </ul>
      </li>
    </ul>
  )
}

export default Dropdown
