// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route#alerts_source_ids AlertRoute#alerts_source_ids}
  */
  readonly alertsSourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route#enabled AlertRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route#id AlertRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route#name AlertRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route#owning_team_ids AlertRoute#owning_team_ids}
  */
  readonly owningTeamIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route rootly_alert_route}
*/
export class AlertRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_alert_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRoute to import
  * @param importFromId The id of the existing AlertRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_alert_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/alert_route rootly_alert_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_alert_route',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsSourceIds = config.alertsSourceIds;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._owningTeamIds = config.owningTeamIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_source_ids - computed: false, optional: false, required: true
  private _alertsSourceIds?: string[]; 
  public get alertsSourceIds() {
    return this.getListAttribute('alerts_source_ids');
  }
  public set alertsSourceIds(value: string[]) {
    this._alertsSourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsSourceIdsInput() {
    return this._alertsSourceIds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // owning_team_ids - computed: false, optional: true, required: false
  private _owningTeamIds?: string[]; 
  public get owningTeamIds() {
    return this.getListAttribute('owning_team_ids');
  }
  public set owningTeamIds(value: string[]) {
    this._owningTeamIds = value;
  }
  public resetOwningTeamIds() {
    this._owningTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get owningTeamIdsInput() {
    return this._owningTeamIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertsSourceIds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owning_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owningTeamIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertsSourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owning_team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owningTeamIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
