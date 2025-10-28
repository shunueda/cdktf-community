// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallshaperPeripshaperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#bandwidth_unit FirewallshaperPeripshaper#bandwidth_unit}
  */
  readonly bandwidthUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#diffserv_forward FirewallshaperPeripshaper#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#diffserv_reverse FirewallshaperPeripshaper#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#diffservcode_forward FirewallshaperPeripshaper#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#diffservcode_rev FirewallshaperPeripshaper#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#id FirewallshaperPeripshaper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#max_bandwidth FirewallshaperPeripshaper#max_bandwidth}
  */
  readonly maxBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#max_concurrent_session FirewallshaperPeripshaper#max_concurrent_session}
  */
  readonly maxConcurrentSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#max_concurrent_tcp_session FirewallshaperPeripshaper#max_concurrent_tcp_session}
  */
  readonly maxConcurrentTcpSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#max_concurrent_udp_session FirewallshaperPeripshaper#max_concurrent_udp_session}
  */
  readonly maxConcurrentUdpSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#name FirewallshaperPeripshaper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#vdomparam FirewallshaperPeripshaper#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper fortios_firewallshaper_peripshaper}
*/
export class FirewallshaperPeripshaper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallshaper_peripshaper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallshaperPeripshaper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallshaperPeripshaper to import
  * @param importFromId The id of the existing FirewallshaperPeripshaper that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallshaperPeripshaper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallshaper_peripshaper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_peripshaper fortios_firewallshaper_peripshaper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallshaperPeripshaperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallshaperPeripshaperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallshaper_peripshaper',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthUnit = config.bandwidthUnit;
    this._diffservForward = config.diffservForward;
    this._diffservReverse = config.diffservReverse;
    this._diffservcodeForward = config.diffservcodeForward;
    this._diffservcodeRev = config.diffservcodeRev;
    this._id = config.id;
    this._maxBandwidth = config.maxBandwidth;
    this._maxConcurrentSession = config.maxConcurrentSession;
    this._maxConcurrentTcpSession = config.maxConcurrentTcpSession;
    this._maxConcurrentUdpSession = config.maxConcurrentUdpSession;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_unit - computed: true, optional: true, required: false
  private _bandwidthUnit?: string; 
  public get bandwidthUnit() {
    return this.getStringAttribute('bandwidth_unit');
  }
  public set bandwidthUnit(value: string) {
    this._bandwidthUnit = value;
  }
  public resetBandwidthUnit() {
    this._bandwidthUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUnitInput() {
    return this._bandwidthUnit;
  }

  // diffserv_forward - computed: true, optional: true, required: false
  private _diffservForward?: string; 
  public get diffservForward() {
    return this.getStringAttribute('diffserv_forward');
  }
  public set diffservForward(value: string) {
    this._diffservForward = value;
  }
  public resetDiffservForward() {
    this._diffservForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservForwardInput() {
    return this._diffservForward;
  }

  // diffserv_reverse - computed: true, optional: true, required: false
  private _diffservReverse?: string; 
  public get diffservReverse() {
    return this.getStringAttribute('diffserv_reverse');
  }
  public set diffservReverse(value: string) {
    this._diffservReverse = value;
  }
  public resetDiffservReverse() {
    this._diffservReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservReverseInput() {
    return this._diffservReverse;
  }

  // diffservcode_forward - computed: false, optional: true, required: false
  private _diffservcodeForward?: string; 
  public get diffservcodeForward() {
    return this.getStringAttribute('diffservcode_forward');
  }
  public set diffservcodeForward(value: string) {
    this._diffservcodeForward = value;
  }
  public resetDiffservcodeForward() {
    this._diffservcodeForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeForwardInput() {
    return this._diffservcodeForward;
  }

  // diffservcode_rev - computed: false, optional: true, required: false
  private _diffservcodeRev?: string; 
  public get diffservcodeRev() {
    return this.getStringAttribute('diffservcode_rev');
  }
  public set diffservcodeRev(value: string) {
    this._diffservcodeRev = value;
  }
  public resetDiffservcodeRev() {
    this._diffservcodeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeRevInput() {
    return this._diffservcodeRev;
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

  // max_bandwidth - computed: false, optional: true, required: false
  private _maxBandwidth?: number; 
  public get maxBandwidth() {
    return this.getNumberAttribute('max_bandwidth');
  }
  public set maxBandwidth(value: number) {
    this._maxBandwidth = value;
  }
  public resetMaxBandwidth() {
    this._maxBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthInput() {
    return this._maxBandwidth;
  }

  // max_concurrent_session - computed: false, optional: true, required: false
  private _maxConcurrentSession?: number; 
  public get maxConcurrentSession() {
    return this.getNumberAttribute('max_concurrent_session');
  }
  public set maxConcurrentSession(value: number) {
    this._maxConcurrentSession = value;
  }
  public resetMaxConcurrentSession() {
    this._maxConcurrentSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentSessionInput() {
    return this._maxConcurrentSession;
  }

  // max_concurrent_tcp_session - computed: false, optional: true, required: false
  private _maxConcurrentTcpSession?: number; 
  public get maxConcurrentTcpSession() {
    return this.getNumberAttribute('max_concurrent_tcp_session');
  }
  public set maxConcurrentTcpSession(value: number) {
    this._maxConcurrentTcpSession = value;
  }
  public resetMaxConcurrentTcpSession() {
    this._maxConcurrentTcpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTcpSessionInput() {
    return this._maxConcurrentTcpSession;
  }

  // max_concurrent_udp_session - computed: false, optional: true, required: false
  private _maxConcurrentUdpSession?: number; 
  public get maxConcurrentUdpSession() {
    return this.getNumberAttribute('max_concurrent_udp_session');
  }
  public set maxConcurrentUdpSession(value: number) {
    this._maxConcurrentUdpSession = value;
  }
  public resetMaxConcurrentUdpSession() {
    this._maxConcurrentUdpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentUdpSessionInput() {
    return this._maxConcurrentUdpSession;
  }

  // name - computed: false, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_unit: cdktf.stringToTerraform(this._bandwidthUnit),
      diffserv_forward: cdktf.stringToTerraform(this._diffservForward),
      diffserv_reverse: cdktf.stringToTerraform(this._diffservReverse),
      diffservcode_forward: cdktf.stringToTerraform(this._diffservcodeForward),
      diffservcode_rev: cdktf.stringToTerraform(this._diffservcodeRev),
      id: cdktf.stringToTerraform(this._id),
      max_bandwidth: cdktf.numberToTerraform(this._maxBandwidth),
      max_concurrent_session: cdktf.numberToTerraform(this._maxConcurrentSession),
      max_concurrent_tcp_session: cdktf.numberToTerraform(this._maxConcurrentTcpSession),
      max_concurrent_udp_session: cdktf.numberToTerraform(this._maxConcurrentUdpSession),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_unit: {
        value: cdktf.stringToHclTerraform(this._bandwidthUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_forward: {
        value: cdktf.stringToHclTerraform(this._diffservForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_reverse: {
        value: cdktf.stringToHclTerraform(this._diffservReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode_forward: {
        value: cdktf.stringToHclTerraform(this._diffservcodeForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode_rev: {
        value: cdktf.stringToHclTerraform(this._diffservcodeRev),
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
      max_bandwidth: {
        value: cdktf.numberToHclTerraform(this._maxBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrent_session: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrent_tcp_session: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentTcpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrent_udp_session: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentUdpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
