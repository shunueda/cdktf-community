// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor status changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#actions PortMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#application_type PortMonitor#application_type}
  */
  readonly applicationType?: string;
  /**
  * Interval at which your website has to be monitored. Default value is 5 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#check_frequency PortMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#command PortMonitor#command}
  */
  readonly command?: string;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#dependency_resource_ids PortMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Name for the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#display_name PortMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Registered domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#host_name PortMonitor#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#id PortMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Invert the default behaviour of PORT check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#invert_port_check PortMonitor#invert_port_check}
  */
  readonly invertPortCheck?: boolean | cdktf.IResolvable;
  /**
  * Location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#location_profile_id PortMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#location_profile_name PortMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * Severity with which alert has to raised when the matching keyword is found in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#matching_keyword_severity PortMonitor#matching_keyword_severity}
  */
  readonly matchingKeywordSeverity?: number;
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#matching_keyword_value PortMonitor#matching_keyword_value}
  */
  readonly matchingKeywordValue?: string;
  /**
  * List of monitor groups to which the monitor has to be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#monitor_groups PortMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#notification_profile_id PortMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#notification_profile_name PortMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * A new On Call schedule to be associated with monitors when user group id  is not chosen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#on_call_schedule_id PortMonitor#on_call_schedule_id}
  */
  readonly onCallScheduleId?: string;
  /**
  * To perform automation or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#perform_automation PortMonitor#perform_automation}
  */
  readonly performAutomation?: boolean | cdktf.IResolvable;
  /**
  * Specify the port the host is listening to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#port PortMonitor#port}
  */
  readonly port?: number;
  /**
  * List of tag IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#tag_ids PortMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#tag_names PortMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#third_party_service_ids PortMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#threshold_profile_id PortMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#timeout PortMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Severity with which alert has to raised when the keyword is not present in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#unmatching_keyword_severity PortMonitor#unmatching_keyword_severity}
  */
  readonly unmatchingKeywordSeverity?: number;
  /**
  * Check for the absence of the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#unmatching_keyword_value PortMonitor#unmatching_keyword_value}
  */
  readonly unmatchingKeywordValue?: string;
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#use_ipv6 PortMonitor#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#use_ssl PortMonitor#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * List of user groups to be notified when the monitor is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#user_group_ids PortMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#user_group_names PortMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor site24x7_port_monitor}
*/
export class PortMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_port_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortMonitor to import
  * @param importFromId The id of the existing PortMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_port_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/port_monitor site24x7_port_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: PortMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_port_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._applicationType = config.applicationType;
    this._checkFrequency = config.checkFrequency;
    this._command = config.command;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._hostName = config.hostName;
    this._id = config.id;
    this._invertPortCheck = config.invertPortCheck;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._matchingKeywordSeverity = config.matchingKeywordSeverity;
    this._matchingKeywordValue = config.matchingKeywordValue;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._onCallScheduleId = config.onCallScheduleId;
    this._performAutomation = config.performAutomation;
    this._port = config.port;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._timeout = config.timeout;
    this._unmatchingKeywordSeverity = config.unmatchingKeywordSeverity;
    this._unmatchingKeywordValue = config.unmatchingKeywordValue;
    this._useIpv6 = config.useIpv6;
    this._useSsl = config.useSsl;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: { [key: string]: string }; 
  public get actions() {
    return this.getStringMapAttribute('actions');
  }
  public set actions(value: { [key: string]: string }) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // check_frequency - computed: false, optional: true, required: false
  private _checkFrequency?: string; 
  public get checkFrequency() {
    return this.getStringAttribute('check_frequency');
  }
  public set checkFrequency(value: string) {
    this._checkFrequency = value;
  }
  public resetCheckFrequency() {
    this._checkFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFrequencyInput() {
    return this._checkFrequency;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // dependency_resource_ids - computed: false, optional: true, required: false
  private _dependencyResourceIds?: string[]; 
  public get dependencyResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dependency_resource_ids'));
  }
  public set dependencyResourceIds(value: string[]) {
    this._dependencyResourceIds = value;
  }
  public resetDependencyResourceIds() {
    this._dependencyResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyResourceIdsInput() {
    return this._dependencyResourceIds;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invert_port_check - computed: false, optional: true, required: false
  private _invertPortCheck?: boolean | cdktf.IResolvable; 
  public get invertPortCheck() {
    return this.getBooleanAttribute('invert_port_check');
  }
  public set invertPortCheck(value: boolean | cdktf.IResolvable) {
    this._invertPortCheck = value;
  }
  public resetInvertPortCheck() {
    this._invertPortCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertPortCheckInput() {
    return this._invertPortCheck;
  }

  // location_profile_id - computed: true, optional: true, required: false
  private _locationProfileId?: string; 
  public get locationProfileId() {
    return this.getStringAttribute('location_profile_id');
  }
  public set locationProfileId(value: string) {
    this._locationProfileId = value;
  }
  public resetLocationProfileId() {
    this._locationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileIdInput() {
    return this._locationProfileId;
  }

  // location_profile_name - computed: true, optional: true, required: false
  private _locationProfileName?: string; 
  public get locationProfileName() {
    return this.getStringAttribute('location_profile_name');
  }
  public set locationProfileName(value: string) {
    this._locationProfileName = value;
  }
  public resetLocationProfileName() {
    this._locationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileNameInput() {
    return this._locationProfileName;
  }

  // matching_keyword_severity - computed: false, optional: true, required: false
  private _matchingKeywordSeverity?: number; 
  public get matchingKeywordSeverity() {
    return this.getNumberAttribute('matching_keyword_severity');
  }
  public set matchingKeywordSeverity(value: number) {
    this._matchingKeywordSeverity = value;
  }
  public resetMatchingKeywordSeverity() {
    this._matchingKeywordSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeywordSeverityInput() {
    return this._matchingKeywordSeverity;
  }

  // matching_keyword_value - computed: false, optional: true, required: false
  private _matchingKeywordValue?: string; 
  public get matchingKeywordValue() {
    return this.getStringAttribute('matching_keyword_value');
  }
  public set matchingKeywordValue(value: string) {
    this._matchingKeywordValue = value;
  }
  public resetMatchingKeywordValue() {
    this._matchingKeywordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeywordValueInput() {
    return this._matchingKeywordValue;
  }

  // monitor_groups - computed: false, optional: true, required: false
  private _monitorGroups?: string[]; 
  public get monitorGroups() {
    return this.getListAttribute('monitor_groups');
  }
  public set monitorGroups(value: string[]) {
    this._monitorGroups = value;
  }
  public resetMonitorGroups() {
    this._monitorGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGroupsInput() {
    return this._monitorGroups;
  }

  // notification_profile_id - computed: true, optional: true, required: false
  private _notificationProfileId?: string; 
  public get notificationProfileId() {
    return this.getStringAttribute('notification_profile_id');
  }
  public set notificationProfileId(value: string) {
    this._notificationProfileId = value;
  }
  public resetNotificationProfileId() {
    this._notificationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileIdInput() {
    return this._notificationProfileId;
  }

  // notification_profile_name - computed: false, optional: true, required: false
  private _notificationProfileName?: string; 
  public get notificationProfileName() {
    return this.getStringAttribute('notification_profile_name');
  }
  public set notificationProfileName(value: string) {
    this._notificationProfileName = value;
  }
  public resetNotificationProfileName() {
    this._notificationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileNameInput() {
    return this._notificationProfileName;
  }

  // on_call_schedule_id - computed: false, optional: true, required: false
  private _onCallScheduleId?: string; 
  public get onCallScheduleId() {
    return this.getStringAttribute('on_call_schedule_id');
  }
  public set onCallScheduleId(value: string) {
    this._onCallScheduleId = value;
  }
  public resetOnCallScheduleId() {
    this._onCallScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallScheduleIdInput() {
    return this._onCallScheduleId;
  }

  // perform_automation - computed: false, optional: true, required: false
  private _performAutomation?: boolean | cdktf.IResolvable; 
  public get performAutomation() {
    return this.getBooleanAttribute('perform_automation');
  }
  public set performAutomation(value: boolean | cdktf.IResolvable) {
    this._performAutomation = value;
  }
  public resetPerformAutomation() {
    this._performAutomation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAutomationInput() {
    return this._performAutomation;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // third_party_service_ids - computed: false, optional: true, required: false
  private _thirdPartyServiceIds?: string[]; 
  public get thirdPartyServiceIds() {
    return this.getListAttribute('third_party_service_ids');
  }
  public set thirdPartyServiceIds(value: string[]) {
    this._thirdPartyServiceIds = value;
  }
  public resetThirdPartyServiceIds() {
    this._thirdPartyServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServiceIdsInput() {
    return this._thirdPartyServiceIds;
  }

  // threshold_profile_id - computed: false, optional: true, required: false
  private _thresholdProfileId?: string; 
  public get thresholdProfileId() {
    return this.getStringAttribute('threshold_profile_id');
  }
  public set thresholdProfileId(value: string) {
    this._thresholdProfileId = value;
  }
  public resetThresholdProfileId() {
    this._thresholdProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdProfileIdInput() {
    return this._thresholdProfileId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unmatching_keyword_severity - computed: false, optional: true, required: false
  private _unmatchingKeywordSeverity?: number; 
  public get unmatchingKeywordSeverity() {
    return this.getNumberAttribute('unmatching_keyword_severity');
  }
  public set unmatchingKeywordSeverity(value: number) {
    this._unmatchingKeywordSeverity = value;
  }
  public resetUnmatchingKeywordSeverity() {
    this._unmatchingKeywordSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchingKeywordSeverityInput() {
    return this._unmatchingKeywordSeverity;
  }

  // unmatching_keyword_value - computed: false, optional: true, required: false
  private _unmatchingKeywordValue?: string; 
  public get unmatchingKeywordValue() {
    return this.getStringAttribute('unmatching_keyword_value');
  }
  public set unmatchingKeywordValue(value: string) {
    this._unmatchingKeywordValue = value;
  }
  public resetUnmatchingKeywordValue() {
    this._unmatchingKeywordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchingKeywordValueInput() {
    return this._unmatchingKeywordValue;
  }

  // use_ipv6 - computed: false, optional: true, required: false
  private _useIpv6?: boolean | cdktf.IResolvable; 
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
  public set useIpv6(value: boolean | cdktf.IResolvable) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // user_group_ids - computed: true, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // user_group_names - computed: false, optional: true, required: false
  private _userGroupNames?: string[]; 
  public get userGroupNames() {
    return this.getListAttribute('user_group_names');
  }
  public set userGroupNames(value: string[]) {
    this._userGroupNames = value;
  }
  public resetUserGroupNames() {
    this._userGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNamesInput() {
    return this._userGroupNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      application_type: cdktf.stringToTerraform(this._applicationType),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      command: cdktf.stringToTerraform(this._command),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      invert_port_check: cdktf.booleanToTerraform(this._invertPortCheck),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      matching_keyword_severity: cdktf.numberToTerraform(this._matchingKeywordSeverity),
      matching_keyword_value: cdktf.stringToTerraform(this._matchingKeywordValue),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      on_call_schedule_id: cdktf.stringToTerraform(this._onCallScheduleId),
      perform_automation: cdktf.booleanToTerraform(this._performAutomation),
      port: cdktf.numberToTerraform(this._port),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      timeout: cdktf.numberToTerraform(this._timeout),
      unmatching_keyword_severity: cdktf.numberToTerraform(this._unmatchingKeywordSeverity),
      unmatching_keyword_value: cdktf.stringToTerraform(this._unmatchingKeywordValue),
      use_ipv6: cdktf.booleanToTerraform(this._useIpv6),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_frequency: {
        value: cdktf.stringToHclTerraform(this._checkFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependency_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencyResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invert_port_check: {
        value: cdktf.booleanToHclTerraform(this._invertPortCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_profile_id: {
        value: cdktf.stringToHclTerraform(this._locationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_profile_name: {
        value: cdktf.stringToHclTerraform(this._locationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_keyword_severity: {
        value: cdktf.numberToHclTerraform(this._matchingKeywordSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      matching_keyword_value: {
        value: cdktf.stringToHclTerraform(this._matchingKeywordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_profile_name: {
        value: cdktf.stringToHclTerraform(this._notificationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_call_schedule_id: {
        value: cdktf.stringToHclTerraform(this._onCallScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perform_automation: {
        value: cdktf.booleanToHclTerraform(this._performAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      third_party_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threshold_profile_id: {
        value: cdktf.stringToHclTerraform(this._thresholdProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unmatching_keyword_severity: {
        value: cdktf.numberToHclTerraform(this._unmatchingKeywordSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unmatching_keyword_value: {
        value: cdktf.stringToHclTerraform(this._unmatchingKeywordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
