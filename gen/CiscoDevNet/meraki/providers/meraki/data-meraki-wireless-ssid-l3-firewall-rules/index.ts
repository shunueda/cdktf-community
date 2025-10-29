// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_l3_firewall_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessSsidL3FirewallRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_l3_firewall_rules#network_id DataMerakiWirelessSsidL3FirewallRules#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_l3_firewall_rules#number DataMerakiWirelessSsidL3FirewallRules#number}
  */
  readonly number: string;
}
export interface DataMerakiWirelessSsidL3FirewallRulesRules {
}

export function dataMerakiWirelessSsidL3FirewallRulesRulesToTerraform(struct?: DataMerakiWirelessSsidL3FirewallRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidL3FirewallRulesRulesToHclTerraform(struct?: DataMerakiWirelessSsidL3FirewallRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidL3FirewallRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiWirelessSsidL3FirewallRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidL3FirewallRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dest_cidr - computed: true, optional: false, required: false
  public get destCidr() {
    return this.getStringAttribute('dest_cidr');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataMerakiWirelessSsidL3FirewallRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidL3FirewallRulesRulesOutputReference {
    return new DataMerakiWirelessSsidL3FirewallRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_l3_firewall_rules meraki_wireless_ssid_l3_firewall_rules}
*/
export class DataMerakiWirelessSsidL3FirewallRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_l3_firewall_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessSsidL3FirewallRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessSsidL3FirewallRules to import
  * @param importFromId The id of the existing DataMerakiWirelessSsidL3FirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_l3_firewall_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessSsidL3FirewallRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_l3_firewall_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_l3_firewall_rules meraki_wireless_ssid_l3_firewall_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessSsidL3FirewallRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessSsidL3FirewallRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_l3_firewall_rules',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._number = config.number;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_lan_access - computed: true, optional: false, required: false
  public get allowLanAccess() {
    return this.getBooleanAttribute('allow_lan_access');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataMerakiWirelessSsidL3FirewallRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
