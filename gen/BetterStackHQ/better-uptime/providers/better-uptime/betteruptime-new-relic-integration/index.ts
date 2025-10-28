// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeNewRelicIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should we alert only on alarms, or on both alarms and warnings. Possible values: alert, alert_and_warn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#alerting_rule BetteruptimeNewRelicIntegration#alerting_rule}
  */
  readonly alertingRule?: string;
  /**
  * Whether to call when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#call BetteruptimeNewRelicIntegration#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Whether to send a critical push notification that ignores the mute switch and Do not Disturb mode when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#critical_alert BetteruptimeNewRelicIntegration#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Whether to send an email when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#email BetteruptimeNewRelicIntegration#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * The name of the AWS CloudWatch Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#name BetteruptimeNewRelicIntegration#name}
  */
  readonly name?: string;
  /**
  * Is the AWS CloudWatch integration paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#paused BetteruptimeNewRelicIntegration#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * ID of the escalation policy associated with the AWS CloudWatch integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#policy_id BetteruptimeNewRelicIntegration#policy_id}
  */
  readonly policyId?: number;
  /**
  * Whether to send a push notification when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#push BetteruptimeNewRelicIntegration#push}
  */
  readonly push?: boolean | cdktf.IResolvable;
  /**
  * How long the alert must be up to automatically mark an incident as resolved. In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#recovery_period BetteruptimeNewRelicIntegration#recovery_period}
  */
  readonly recoveryPeriod?: number;
  /**
  * Whether to send an SMS when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#sms BetteruptimeNewRelicIntegration#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#team_name BetteruptimeNewRelicIntegration#team_name}
  */
  readonly teamName?: string;
  /**
  * How long we wait before escalating the incident alert to the team. In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#team_wait BetteruptimeNewRelicIntegration#team_wait}
  */
  readonly teamWait?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration betteruptime_new_relic_integration}
*/
export class BetteruptimeNewRelicIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_new_relic_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeNewRelicIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeNewRelicIntegration to import
  * @param importFromId The id of the existing BetteruptimeNewRelicIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeNewRelicIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_new_relic_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_new_relic_integration betteruptime_new_relic_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeNewRelicIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeNewRelicIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_new_relic_integration',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertingRule = config.alertingRule;
    this._call = config.call;
    this._criticalAlert = config.criticalAlert;
    this._email = config.email;
    this._name = config.name;
    this._paused = config.paused;
    this._policyId = config.policyId;
    this._push = config.push;
    this._recoveryPeriod = config.recoveryPeriod;
    this._sms = config.sms;
    this._teamName = config.teamName;
    this._teamWait = config.teamWait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_rule - computed: true, optional: true, required: false
  private _alertingRule?: string; 
  public get alertingRule() {
    return this.getStringAttribute('alerting_rule');
  }
  public set alertingRule(value: string) {
    this._alertingRule = value;
  }
  public resetAlertingRule() {
    this._alertingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingRuleInput() {
    return this._alertingRule;
  }

  // call - computed: true, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // critical_alert - computed: true, optional: true, required: false
  private _criticalAlert?: boolean | cdktf.IResolvable; 
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }
  public set criticalAlert(value: boolean | cdktf.IResolvable) {
    this._criticalAlert = value;
  }
  public resetCriticalAlert() {
    this._criticalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertInput() {
    return this._criticalAlert;
  }

  // email - computed: true, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // push - computed: true, optional: true, required: false
  private _push?: boolean | cdktf.IResolvable; 
  public get push() {
    return this.getBooleanAttribute('push');
  }
  public set push(value: boolean | cdktf.IResolvable) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // recovery_period - computed: true, optional: true, required: false
  private _recoveryPeriod?: number; 
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }
  public set recoveryPeriod(value: number) {
    this._recoveryPeriod = value;
  }
  public resetRecoveryPeriod() {
    this._recoveryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPeriodInput() {
    return this._recoveryPeriod;
  }

  // sms - computed: true, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // team_wait - computed: true, optional: true, required: false
  private _teamWait?: number; 
  public get teamWait() {
    return this.getNumberAttribute('team_wait');
  }
  public set teamWait(value: number) {
    this._teamWait = value;
  }
  public resetTeamWait() {
    this._teamWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamWaitInput() {
    return this._teamWait;
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerting_rule: cdktf.stringToTerraform(this._alertingRule),
      call: cdktf.booleanToTerraform(this._call),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      email: cdktf.booleanToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      policy_id: cdktf.numberToTerraform(this._policyId),
      push: cdktf.booleanToTerraform(this._push),
      recovery_period: cdktf.numberToTerraform(this._recoveryPeriod),
      sms: cdktf.booleanToTerraform(this._sms),
      team_name: cdktf.stringToTerraform(this._teamName),
      team_wait: cdktf.numberToTerraform(this._teamWait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerting_rule: {
        value: cdktf.stringToHclTerraform(this._alertingRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call: {
        value: cdktf.booleanToHclTerraform(this._call),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.booleanToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      push: {
        value: cdktf.booleanToHclTerraform(this._push),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_period: {
        value: cdktf.numberToHclTerraform(this._recoveryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sms: {
        value: cdktf.booleanToHclTerraform(this._sms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_wait: {
        value: cdktf.numberToHclTerraform(this._teamWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
