// https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGlobalPolicyUnorderedConfig extends cdktf.TerraformMetaArguments {
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#policy SecurityGlobalPolicyUnordered#policy}
  */
  readonly policy?: SecurityGlobalPolicyUnorderedPolicy[] | cdktf.IResolvable;
}
export interface SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy {
  /**
  * Specify SSL proxy service profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#profile_name SecurityGlobalPolicyUnordered#profile_name}
  */
  readonly profileName?: string;
}

export function securityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxyToTerraform(struct?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_name: cdktf.stringToTerraform(struct!.profileName),
  }
}


export function securityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxyToHclTerraform(struct?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileName = value.profileName;
    }
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }
}
export interface SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy {
  /**
  * Specify captive portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#captive_portal SecurityGlobalPolicyUnordered#captive_portal}
  */
  readonly captivePortal?: string;
}

export function securityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicyToTerraform(struct?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    captive_portal: cdktf.stringToTerraform(struct!.captivePortal),
  }
}


export function securityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicyToHclTerraform(struct?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    captive_portal: {
      value: cdktf.stringToHclTerraform(struct!.captivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.captivePortal = this._captivePortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captivePortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captivePortal = value.captivePortal;
    }
  }

  // captive_portal - computed: false, optional: true, required: false
  private _captivePortal?: string; 
  public get captivePortal() {
    return this.getStringAttribute('captive_portal');
  }
  public set captivePortal(value: string) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }
}
export interface SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices {
  /**
  * Specify advanced-anti-malware policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#advanced_anti_malware_policy SecurityGlobalPolicyUnordered#advanced_anti_malware_policy}
  */
  readonly advancedAntiMalwarePolicy?: string;
  /**
  * Service rule-set name for Application firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#application_firewall_rule_set SecurityGlobalPolicyUnordered#application_firewall_rule_set}
  */
  readonly applicationFirewallRuleSet?: string;
  /**
  * Service rule-set name Application traffic control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#application_traffic_control_rule_set SecurityGlobalPolicyUnordered#application_traffic_control_rule_set}
  */
  readonly applicationTrafficControlRuleSet?: string;
  /**
  * Specify GPRS Tunneling Protocol profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#gprs_gtp_profile SecurityGlobalPolicyUnordered#gprs_gtp_profile}
  */
  readonly gprsGtpProfile?: string;
  /**
  * Specify GPRS stream control protocol profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#gprs_sctp_profile SecurityGlobalPolicyUnordered#gprs_sctp_profile}
  */
  readonly gprsSctpProfile?: string;
  /**
  * Enable Intrusion detection and prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#idp SecurityGlobalPolicyUnordered#idp}
  */
  readonly idp?: boolean | cdktf.IResolvable;
  /**
  * Specify idp policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#idp_policy SecurityGlobalPolicyUnordered#idp_policy}
  */
  readonly idpPolicy?: string;
  /**
  * Set WX redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#redirect_wx SecurityGlobalPolicyUnordered#redirect_wx}
  */
  readonly redirectWx?: boolean | cdktf.IResolvable;
  /**
  * Set WX reverse redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#reverse_redirect_wx SecurityGlobalPolicyUnordered#reverse_redirect_wx}
  */
  readonly reverseRedirectWx?: boolean | cdktf.IResolvable;
  /**
  * Specify security-intelligence policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#security_intelligence_policy SecurityGlobalPolicyUnordered#security_intelligence_policy}
  */
  readonly securityIntelligencePolicy?: string;
  /**
  * Specify utm policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#utm_policy SecurityGlobalPolicyUnordered#utm_policy}
  */
  readonly utmPolicy?: string;
  /**
  * ssl_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#ssl_proxy SecurityGlobalPolicyUnordered#ssl_proxy}
  */
  readonly sslProxy?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy;
  /**
  * uac_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#uac_policy SecurityGlobalPolicyUnordered#uac_policy}
  */
  readonly uacPolicy?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy;
}

export function securityGlobalPolicyUnorderedPolicyPermitApplicationServicesToTerraform(struct?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_anti_malware_policy: cdktf.stringToTerraform(struct!.advancedAntiMalwarePolicy),
    application_firewall_rule_set: cdktf.stringToTerraform(struct!.applicationFirewallRuleSet),
    application_traffic_control_rule_set: cdktf.stringToTerraform(struct!.applicationTrafficControlRuleSet),
    gprs_gtp_profile: cdktf.stringToTerraform(struct!.gprsGtpProfile),
    gprs_sctp_profile: cdktf.stringToTerraform(struct!.gprsSctpProfile),
    idp: cdktf.booleanToTerraform(struct!.idp),
    idp_policy: cdktf.stringToTerraform(struct!.idpPolicy),
    redirect_wx: cdktf.booleanToTerraform(struct!.redirectWx),
    reverse_redirect_wx: cdktf.booleanToTerraform(struct!.reverseRedirectWx),
    security_intelligence_policy: cdktf.stringToTerraform(struct!.securityIntelligencePolicy),
    utm_policy: cdktf.stringToTerraform(struct!.utmPolicy),
    ssl_proxy: securityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxyToTerraform(struct!.sslProxy),
    uac_policy: securityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicyToTerraform(struct!.uacPolicy),
  }
}


export function securityGlobalPolicyUnorderedPolicyPermitApplicationServicesToHclTerraform(struct?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_anti_malware_policy: {
      value: cdktf.stringToHclTerraform(struct!.advancedAntiMalwarePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_firewall_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.applicationFirewallRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_traffic_control_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.applicationTrafficControlRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gprs_gtp_profile: {
      value: cdktf.stringToHclTerraform(struct!.gprsGtpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gprs_sctp_profile: {
      value: cdktf.stringToHclTerraform(struct!.gprsSctpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp: {
      value: cdktf.booleanToHclTerraform(struct!.idp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_policy: {
      value: cdktf.stringToHclTerraform(struct!.idpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_wx: {
      value: cdktf.booleanToHclTerraform(struct!.redirectWx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reverse_redirect_wx: {
      value: cdktf.booleanToHclTerraform(struct!.reverseRedirectWx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_intelligence_policy: {
      value: cdktf.stringToHclTerraform(struct!.securityIntelligencePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utm_policy: {
      value: cdktf.stringToHclTerraform(struct!.utmPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_proxy: {
      value: securityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxyToHclTerraform(struct!.sslProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy",
    },
    uac_policy: {
      value: securityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicyToHclTerraform(struct!.uacPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedAntiMalwarePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedAntiMalwarePolicy = this._advancedAntiMalwarePolicy;
    }
    if (this._applicationFirewallRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFirewallRuleSet = this._applicationFirewallRuleSet;
    }
    if (this._applicationTrafficControlRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTrafficControlRuleSet = this._applicationTrafficControlRuleSet;
    }
    if (this._gprsGtpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.gprsGtpProfile = this._gprsGtpProfile;
    }
    if (this._gprsSctpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.gprsSctpProfile = this._gprsSctpProfile;
    }
    if (this._idp !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp;
    }
    if (this._idpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpPolicy = this._idpPolicy;
    }
    if (this._redirectWx !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectWx = this._redirectWx;
    }
    if (this._reverseRedirectWx !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseRedirectWx = this._reverseRedirectWx;
    }
    if (this._securityIntelligencePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIntelligencePolicy = this._securityIntelligencePolicy;
    }
    if (this._utmPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.utmPolicy = this._utmPolicy;
    }
    if (this._sslProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProxy = this._sslProxy?.internalValue;
    }
    if (this._uacPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uacPolicy = this._uacPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedAntiMalwarePolicy = undefined;
      this._applicationFirewallRuleSet = undefined;
      this._applicationTrafficControlRuleSet = undefined;
      this._gprsGtpProfile = undefined;
      this._gprsSctpProfile = undefined;
      this._idp = undefined;
      this._idpPolicy = undefined;
      this._redirectWx = undefined;
      this._reverseRedirectWx = undefined;
      this._securityIntelligencePolicy = undefined;
      this._utmPolicy = undefined;
      this._sslProxy.internalValue = undefined;
      this._uacPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedAntiMalwarePolicy = value.advancedAntiMalwarePolicy;
      this._applicationFirewallRuleSet = value.applicationFirewallRuleSet;
      this._applicationTrafficControlRuleSet = value.applicationTrafficControlRuleSet;
      this._gprsGtpProfile = value.gprsGtpProfile;
      this._gprsSctpProfile = value.gprsSctpProfile;
      this._idp = value.idp;
      this._idpPolicy = value.idpPolicy;
      this._redirectWx = value.redirectWx;
      this._reverseRedirectWx = value.reverseRedirectWx;
      this._securityIntelligencePolicy = value.securityIntelligencePolicy;
      this._utmPolicy = value.utmPolicy;
      this._sslProxy.internalValue = value.sslProxy;
      this._uacPolicy.internalValue = value.uacPolicy;
    }
  }

  // advanced_anti_malware_policy - computed: false, optional: true, required: false
  private _advancedAntiMalwarePolicy?: string; 
  public get advancedAntiMalwarePolicy() {
    return this.getStringAttribute('advanced_anti_malware_policy');
  }
  public set advancedAntiMalwarePolicy(value: string) {
    this._advancedAntiMalwarePolicy = value;
  }
  public resetAdvancedAntiMalwarePolicy() {
    this._advancedAntiMalwarePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAntiMalwarePolicyInput() {
    return this._advancedAntiMalwarePolicy;
  }

  // application_firewall_rule_set - computed: false, optional: true, required: false
  private _applicationFirewallRuleSet?: string; 
  public get applicationFirewallRuleSet() {
    return this.getStringAttribute('application_firewall_rule_set');
  }
  public set applicationFirewallRuleSet(value: string) {
    this._applicationFirewallRuleSet = value;
  }
  public resetApplicationFirewallRuleSet() {
    this._applicationFirewallRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFirewallRuleSetInput() {
    return this._applicationFirewallRuleSet;
  }

  // application_traffic_control_rule_set - computed: false, optional: true, required: false
  private _applicationTrafficControlRuleSet?: string; 
  public get applicationTrafficControlRuleSet() {
    return this.getStringAttribute('application_traffic_control_rule_set');
  }
  public set applicationTrafficControlRuleSet(value: string) {
    this._applicationTrafficControlRuleSet = value;
  }
  public resetApplicationTrafficControlRuleSet() {
    this._applicationTrafficControlRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTrafficControlRuleSetInput() {
    return this._applicationTrafficControlRuleSet;
  }

  // gprs_gtp_profile - computed: false, optional: true, required: false
  private _gprsGtpProfile?: string; 
  public get gprsGtpProfile() {
    return this.getStringAttribute('gprs_gtp_profile');
  }
  public set gprsGtpProfile(value: string) {
    this._gprsGtpProfile = value;
  }
  public resetGprsGtpProfile() {
    this._gprsGtpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gprsGtpProfileInput() {
    return this._gprsGtpProfile;
  }

  // gprs_sctp_profile - computed: false, optional: true, required: false
  private _gprsSctpProfile?: string; 
  public get gprsSctpProfile() {
    return this.getStringAttribute('gprs_sctp_profile');
  }
  public set gprsSctpProfile(value: string) {
    this._gprsSctpProfile = value;
  }
  public resetGprsSctpProfile() {
    this._gprsSctpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gprsSctpProfileInput() {
    return this._gprsSctpProfile;
  }

  // idp - computed: false, optional: true, required: false
  private _idp?: boolean | cdktf.IResolvable; 
  public get idp() {
    return this.getBooleanAttribute('idp');
  }
  public set idp(value: boolean | cdktf.IResolvable) {
    this._idp = value;
  }
  public resetIdp() {
    this._idp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp;
  }

  // idp_policy - computed: false, optional: true, required: false
  private _idpPolicy?: string; 
  public get idpPolicy() {
    return this.getStringAttribute('idp_policy');
  }
  public set idpPolicy(value: string) {
    this._idpPolicy = value;
  }
  public resetIdpPolicy() {
    this._idpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpPolicyInput() {
    return this._idpPolicy;
  }

  // redirect_wx - computed: false, optional: true, required: false
  private _redirectWx?: boolean | cdktf.IResolvable; 
  public get redirectWx() {
    return this.getBooleanAttribute('redirect_wx');
  }
  public set redirectWx(value: boolean | cdktf.IResolvable) {
    this._redirectWx = value;
  }
  public resetRedirectWx() {
    this._redirectWx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectWxInput() {
    return this._redirectWx;
  }

  // reverse_redirect_wx - computed: false, optional: true, required: false
  private _reverseRedirectWx?: boolean | cdktf.IResolvable; 
  public get reverseRedirectWx() {
    return this.getBooleanAttribute('reverse_redirect_wx');
  }
  public set reverseRedirectWx(value: boolean | cdktf.IResolvable) {
    this._reverseRedirectWx = value;
  }
  public resetReverseRedirectWx() {
    this._reverseRedirectWx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseRedirectWxInput() {
    return this._reverseRedirectWx;
  }

  // security_intelligence_policy - computed: false, optional: true, required: false
  private _securityIntelligencePolicy?: string; 
  public get securityIntelligencePolicy() {
    return this.getStringAttribute('security_intelligence_policy');
  }
  public set securityIntelligencePolicy(value: string) {
    this._securityIntelligencePolicy = value;
  }
  public resetSecurityIntelligencePolicy() {
    this._securityIntelligencePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIntelligencePolicyInput() {
    return this._securityIntelligencePolicy;
  }

  // utm_policy - computed: false, optional: true, required: false
  private _utmPolicy?: string; 
  public get utmPolicy() {
    return this.getStringAttribute('utm_policy');
  }
  public set utmPolicy(value: string) {
    this._utmPolicy = value;
  }
  public resetUtmPolicy() {
    this._utmPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmPolicyInput() {
    return this._utmPolicy;
  }

  // ssl_proxy - computed: false, optional: true, required: false
  private _sslProxy = new SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxyOutputReference(this, "ssl_proxy");
  public get sslProxy() {
    return this._sslProxy;
  }
  public putSslProxy(value: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesSslProxy) {
    this._sslProxy.internalValue = value;
  }
  public resetSslProxy() {
    this._sslProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProxyInput() {
    return this._sslProxy.internalValue;
  }

  // uac_policy - computed: false, optional: true, required: false
  private _uacPolicy = new SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicyOutputReference(this, "uac_policy");
  public get uacPolicy() {
    return this._uacPolicy;
  }
  public putUacPolicy(value: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesUacPolicy) {
    this._uacPolicy.internalValue = value;
  }
  public resetUacPolicy() {
    this._uacPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uacPolicyInput() {
    return this._uacPolicy.internalValue;
  }
}
export interface SecurityGlobalPolicyUnorderedPolicy {
  /**
  * Enable count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#count SecurityGlobalPolicyUnordered#count}
  */
  readonly count?: boolean | cdktf.IResolvable;
  /**
  * Log at session close time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#log_close SecurityGlobalPolicyUnordered#log_close}
  */
  readonly logClose?: boolean | cdktf.IResolvable;
  /**
  * Log at session init time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#log_init SecurityGlobalPolicyUnordered#log_init}
  */
  readonly logInit?: boolean | cdktf.IResolvable;
  /**
  * List of applications match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_application SecurityGlobalPolicyUnordered#match_application}
  */
  readonly matchApplication?: string[];
  /**
  * List of destination address match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_destination_address SecurityGlobalPolicyUnordered#match_destination_address}
  */
  readonly matchDestinationAddress: string[];
  /**
  * Exclude destination addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_destination_address_excluded SecurityGlobalPolicyUnordered#match_destination_address_excluded}
  */
  readonly matchDestinationAddressExcluded?: boolean | cdktf.IResolvable;
  /**
  * List of dynamic application or group match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_dynamic_application SecurityGlobalPolicyUnordered#match_dynamic_application}
  */
  readonly matchDynamicApplication?: string[];
  /**
  * Match multiple source zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_from_zone SecurityGlobalPolicyUnordered#match_from_zone}
  */
  readonly matchFromZone: string[];
  /**
  * List of source address match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_source_address SecurityGlobalPolicyUnordered#match_source_address}
  */
  readonly matchSourceAddress: string[];
  /**
  * Exclude source addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_source_address_excluded SecurityGlobalPolicyUnordered#match_source_address_excluded}
  */
  readonly matchSourceAddressExcluded?: boolean | cdktf.IResolvable;
  /**
  * Match source end user profile (device identity profile).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_source_end_user_profile SecurityGlobalPolicyUnordered#match_source_end_user_profile}
  */
  readonly matchSourceEndUserProfile?: string;
  /**
  * Match multiple destination zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#match_to_zone SecurityGlobalPolicyUnordered#match_to_zone}
  */
  readonly matchToZone: string[];
  /**
  * Security policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#name SecurityGlobalPolicyUnordered#name}
  */
  readonly name: string;
  /**
  * Action of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#then SecurityGlobalPolicyUnordered#then}
  */
  readonly then?: string;
  /**
  * permit_application_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#permit_application_services SecurityGlobalPolicyUnordered#permit_application_services}
  */
  readonly permitApplicationServices?: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices;
}

export function securityGlobalPolicyUnorderedPolicyToTerraform(struct?: SecurityGlobalPolicyUnorderedPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.booleanToTerraform(struct!.count),
    log_close: cdktf.booleanToTerraform(struct!.logClose),
    log_init: cdktf.booleanToTerraform(struct!.logInit),
    match_application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchApplication),
    match_destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchDestinationAddress),
    match_destination_address_excluded: cdktf.booleanToTerraform(struct!.matchDestinationAddressExcluded),
    match_dynamic_application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchDynamicApplication),
    match_from_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchFromZone),
    match_source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchSourceAddress),
    match_source_address_excluded: cdktf.booleanToTerraform(struct!.matchSourceAddressExcluded),
    match_source_end_user_profile: cdktf.stringToTerraform(struct!.matchSourceEndUserProfile),
    match_to_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchToZone),
    name: cdktf.stringToTerraform(struct!.name),
    then: cdktf.stringToTerraform(struct!.then),
    permit_application_services: securityGlobalPolicyUnorderedPolicyPermitApplicationServicesToTerraform(struct!.permitApplicationServices),
  }
}


export function securityGlobalPolicyUnorderedPolicyToHclTerraform(struct?: SecurityGlobalPolicyUnorderedPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.booleanToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_close: {
      value: cdktf.booleanToHclTerraform(struct!.logClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_init: {
      value: cdktf.booleanToHclTerraform(struct!.logInit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchApplication),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchDestinationAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_destination_address_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.matchDestinationAddressExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_dynamic_application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchDynamicApplication),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_from_zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchFromZone),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchSourceAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_source_address_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.matchSourceAddressExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_source_end_user_profile: {
      value: cdktf.stringToHclTerraform(struct!.matchSourceEndUserProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_to_zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchToZone),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    then: {
      value: cdktf.stringToHclTerraform(struct!.then),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_application_services: {
      value: securityGlobalPolicyUnorderedPolicyPermitApplicationServicesToHclTerraform(struct!.permitApplicationServices),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGlobalPolicyUnorderedPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecurityGlobalPolicyUnorderedPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._logClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.logClose = this._logClose;
    }
    if (this._logInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInit = this._logInit;
    }
    if (this._matchApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchApplication = this._matchApplication;
    }
    if (this._matchDestinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDestinationAddress = this._matchDestinationAddress;
    }
    if (this._matchDestinationAddressExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDestinationAddressExcluded = this._matchDestinationAddressExcluded;
    }
    if (this._matchDynamicApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDynamicApplication = this._matchDynamicApplication;
    }
    if (this._matchFromZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFromZone = this._matchFromZone;
    }
    if (this._matchSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceAddress = this._matchSourceAddress;
    }
    if (this._matchSourceAddressExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceAddressExcluded = this._matchSourceAddressExcluded;
    }
    if (this._matchSourceEndUserProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceEndUserProfile = this._matchSourceEndUserProfile;
    }
    if (this._matchToZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchToZone = this._matchToZone;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._then !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then;
    }
    if (this._permitApplicationServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitApplicationServices = this._permitApplicationServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGlobalPolicyUnorderedPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._logClose = undefined;
      this._logInit = undefined;
      this._matchApplication = undefined;
      this._matchDestinationAddress = undefined;
      this._matchDestinationAddressExcluded = undefined;
      this._matchDynamicApplication = undefined;
      this._matchFromZone = undefined;
      this._matchSourceAddress = undefined;
      this._matchSourceAddressExcluded = undefined;
      this._matchSourceEndUserProfile = undefined;
      this._matchToZone = undefined;
      this._name = undefined;
      this._then = undefined;
      this._permitApplicationServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._logClose = value.logClose;
      this._logInit = value.logInit;
      this._matchApplication = value.matchApplication;
      this._matchDestinationAddress = value.matchDestinationAddress;
      this._matchDestinationAddressExcluded = value.matchDestinationAddressExcluded;
      this._matchDynamicApplication = value.matchDynamicApplication;
      this._matchFromZone = value.matchFromZone;
      this._matchSourceAddress = value.matchSourceAddress;
      this._matchSourceAddressExcluded = value.matchSourceAddressExcluded;
      this._matchSourceEndUserProfile = value.matchSourceEndUserProfile;
      this._matchToZone = value.matchToZone;
      this._name = value.name;
      this._then = value.then;
      this._permitApplicationServices.internalValue = value.permitApplicationServices;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: boolean | cdktf.IResolvable; 
  public get count() {
    return this.getBooleanAttribute('count');
  }
  public set count(value: boolean | cdktf.IResolvable) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // log_close - computed: false, optional: true, required: false
  private _logClose?: boolean | cdktf.IResolvable; 
  public get logClose() {
    return this.getBooleanAttribute('log_close');
  }
  public set logClose(value: boolean | cdktf.IResolvable) {
    this._logClose = value;
  }
  public resetLogClose() {
    this._logClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCloseInput() {
    return this._logClose;
  }

  // log_init - computed: false, optional: true, required: false
  private _logInit?: boolean | cdktf.IResolvable; 
  public get logInit() {
    return this.getBooleanAttribute('log_init');
  }
  public set logInit(value: boolean | cdktf.IResolvable) {
    this._logInit = value;
  }
  public resetLogInit() {
    this._logInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInitInput() {
    return this._logInit;
  }

  // match_application - computed: false, optional: true, required: false
  private _matchApplication?: string[]; 
  public get matchApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('match_application'));
  }
  public set matchApplication(value: string[]) {
    this._matchApplication = value;
  }
  public resetMatchApplication() {
    this._matchApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationInput() {
    return this._matchApplication;
  }

  // match_destination_address - computed: false, optional: false, required: true
  private _matchDestinationAddress?: string[]; 
  public get matchDestinationAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('match_destination_address'));
  }
  public set matchDestinationAddress(value: string[]) {
    this._matchDestinationAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationAddressInput() {
    return this._matchDestinationAddress;
  }

  // match_destination_address_excluded - computed: false, optional: true, required: false
  private _matchDestinationAddressExcluded?: boolean | cdktf.IResolvable; 
  public get matchDestinationAddressExcluded() {
    return this.getBooleanAttribute('match_destination_address_excluded');
  }
  public set matchDestinationAddressExcluded(value: boolean | cdktf.IResolvable) {
    this._matchDestinationAddressExcluded = value;
  }
  public resetMatchDestinationAddressExcluded() {
    this._matchDestinationAddressExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationAddressExcludedInput() {
    return this._matchDestinationAddressExcluded;
  }

  // match_dynamic_application - computed: false, optional: true, required: false
  private _matchDynamicApplication?: string[]; 
  public get matchDynamicApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('match_dynamic_application'));
  }
  public set matchDynamicApplication(value: string[]) {
    this._matchDynamicApplication = value;
  }
  public resetMatchDynamicApplication() {
    this._matchDynamicApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDynamicApplicationInput() {
    return this._matchDynamicApplication;
  }

  // match_from_zone - computed: false, optional: false, required: true
  private _matchFromZone?: string[]; 
  public get matchFromZone() {
    return cdktf.Fn.tolist(this.getListAttribute('match_from_zone'));
  }
  public set matchFromZone(value: string[]) {
    this._matchFromZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFromZoneInput() {
    return this._matchFromZone;
  }

  // match_source_address - computed: false, optional: false, required: true
  private _matchSourceAddress?: string[]; 
  public get matchSourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('match_source_address'));
  }
  public set matchSourceAddress(value: string[]) {
    this._matchSourceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceAddressInput() {
    return this._matchSourceAddress;
  }

  // match_source_address_excluded - computed: false, optional: true, required: false
  private _matchSourceAddressExcluded?: boolean | cdktf.IResolvable; 
  public get matchSourceAddressExcluded() {
    return this.getBooleanAttribute('match_source_address_excluded');
  }
  public set matchSourceAddressExcluded(value: boolean | cdktf.IResolvable) {
    this._matchSourceAddressExcluded = value;
  }
  public resetMatchSourceAddressExcluded() {
    this._matchSourceAddressExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceAddressExcludedInput() {
    return this._matchSourceAddressExcluded;
  }

  // match_source_end_user_profile - computed: false, optional: true, required: false
  private _matchSourceEndUserProfile?: string; 
  public get matchSourceEndUserProfile() {
    return this.getStringAttribute('match_source_end_user_profile');
  }
  public set matchSourceEndUserProfile(value: string) {
    this._matchSourceEndUserProfile = value;
  }
  public resetMatchSourceEndUserProfile() {
    this._matchSourceEndUserProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceEndUserProfileInput() {
    return this._matchSourceEndUserProfile;
  }

  // match_to_zone - computed: false, optional: false, required: true
  private _matchToZone?: string[]; 
  public get matchToZone() {
    return cdktf.Fn.tolist(this.getListAttribute('match_to_zone'));
  }
  public set matchToZone(value: string[]) {
    this._matchToZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchToZoneInput() {
    return this._matchToZone;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // then - computed: true, optional: true, required: false
  private _then?: string; 
  public get then() {
    return this.getStringAttribute('then');
  }
  public set then(value: string) {
    this._then = value;
  }
  public resetThen() {
    this._then = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then;
  }

  // permit_application_services - computed: false, optional: true, required: false
  private _permitApplicationServices = new SecurityGlobalPolicyUnorderedPolicyPermitApplicationServicesOutputReference(this, "permit_application_services");
  public get permitApplicationServices() {
    return this._permitApplicationServices;
  }
  public putPermitApplicationServices(value: SecurityGlobalPolicyUnorderedPolicyPermitApplicationServices) {
    this._permitApplicationServices.internalValue = value;
  }
  public resetPermitApplicationServices() {
    this._permitApplicationServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitApplicationServicesInput() {
    return this._permitApplicationServices.internalValue;
  }
}

export class SecurityGlobalPolicyUnorderedPolicyList extends cdktf.ComplexList {
  public internalValue? : SecurityGlobalPolicyUnorderedPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityGlobalPolicyUnorderedPolicyOutputReference {
    return new SecurityGlobalPolicyUnorderedPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered junos_security_global_policy_unordered}
*/
export class SecurityGlobalPolicyUnordered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_global_policy_unordered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGlobalPolicyUnordered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGlobalPolicyUnordered to import
  * @param importFromId The id of the existing SecurityGlobalPolicyUnordered that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGlobalPolicyUnordered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_global_policy_unordered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_global_policy_unordered junos_security_global_policy_unordered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGlobalPolicyUnorderedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityGlobalPolicyUnorderedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_security_global_policy_unordered',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new SecurityGlobalPolicyUnorderedPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SecurityGlobalPolicyUnorderedPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy: cdktf.listMapper(securityGlobalPolicyUnorderedPolicyToTerraform, true)(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy: {
        value: cdktf.listMapperHcl(securityGlobalPolicyUnorderedPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityGlobalPolicyUnorderedPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
